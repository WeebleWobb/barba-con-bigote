import { Metadata } from 'next';
import Container from '@/components/grid/container';
import Row from '@/components/grid/row';
import Column from '@/components/grid/column';
import ContentTransition from '@/components/motion/content-transition';
import { TopTracks, RecentlyPlayed } from '@/components/music';
import PageHeader from '@/components/page-header';
import { getTopTracks, getRecentlyPlayed } from '@/lib/spotify';

export const metadata: Metadata = {
  title: 'Musica',
  description: 'The music I listen to when I work, relax, and unplug.',
  openGraph: {
    title: 'Musica',
    description: 'The music I listen to when I work, relax, and unplug.',
  },
};

// Force dynamic rendering - page requires runtime Spotify credentials
export const dynamic = 'force-dynamic';

export default async function MusicPage() {
  const [topTracks, recentlyPlayed] = await Promise.all([
    getTopTracks(6),
    getRecentlyPlayed(10),
  ]);

  return (
    <Container className='pb-12'>
      <PageHeader
        title="Studio Sessions"
        subtitle="Tracks that fuel the creative process"
      />

      <Row className="mt-8">
        <Column xs={12}>
          <ContentTransition delay={0.2}>
            <TopTracks tracks={topTracks} />
          </ContentTransition>
        </Column>
      </Row>

      <Row className="mt-12">
        <Column xs={12}>
          <ContentTransition delay={0.4}>
            <RecentlyPlayed tracks={recentlyPlayed} />
          </ContentTransition>
        </Column>
      </Row>
    </Container>
  );
}
