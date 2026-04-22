import { Suspense } from 'react';
import { Metadata } from 'next';
import Container from '@/components/grid/container';
import Row from '@/components/grid/row';
import Column from '@/components/grid/column';
import ContentTransition from '@/components/motion/content-transition';
import { TopTracks, RecentlyPlayed } from '@/components/music';
import PageHeader from '@/components/page-header';
import { getTopTracks, getRecentlyPlayed } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Musica',
  description: 'The music I listen to when I work, relax, and unplug.',
  openGraph: {
    title: 'Musica',
    description: 'The music I listen to when I work, relax, and unplug.',
  },
};

async function TopTracksSection() {
  const tracks = await getTopTracks(6);
  return (
    <ContentTransition delay={0.2}>
      <TopTracks tracks={tracks} />
    </ContentTransition>
  );
}

async function RecentlyPlayedSection() {
  const tracks = await getRecentlyPlayed(10);
  return (
    <ContentTransition delay={0.4}>
      <RecentlyPlayed tracks={tracks} />
    </ContentTransition>
  );
}

export default function MusicPage() {
  return (
    <Container className="pb-12">
      <PageHeader
        title="Studio Sessions"
        subtitle="Tracks that fuel the creative process"
      />

      <Row className="mt-8">
        <Column xs={12}>
          <Suspense fallback={<TopTracks isLoading />}>
            <TopTracksSection />
          </Suspense>
        </Column>
      </Row>

      <Row className="mt-12">
        <Column xs={12}>
          <Suspense fallback={<RecentlyPlayed isLoading />}>
            <RecentlyPlayedSection />
          </Suspense>
        </Column>
      </Row>
    </Container>
  );
}
