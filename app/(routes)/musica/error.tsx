'use client';

import Container from '@/components/grid/container';
import Row from '@/components/grid/row';
import Column from '@/components/grid/column';
import Header from '@/components/typography/header';
import Paragraph from '@/components/typography/paragraph';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MusicError({ error, reset }: ErrorProps) {
  return (
    <Container>
      <Row justifyXs="center">
        <Column xs={12} md={8} lg={6}>
          <div className="text-center py-12">
            <Header level={2}>Unable to load music</Header>
            <Paragraph className="text-brown/70">
              {error.message.includes('credentials')
                ? 'Spotify credentials are not configured. Please set up your environment variables.'
                : 'There was an error loading your music data. Please try again.'}
            </Paragraph>
            <button
              onClick={reset}
              className="mt-6 px-6 py-3 bg-spotify-green text-white font-medium rounded-xl hover:bg-spotify-green/90 transition-colors"
            >
              Try again
            </button>
          </div>
        </Column>
      </Row>
    </Container>
  );
}
