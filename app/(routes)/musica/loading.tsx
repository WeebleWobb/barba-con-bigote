import Container from '@/components/grid/container';
import Row from '@/components/grid/row';
import Column from '@/components/grid/column';

function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-44 bg-tan border-[3px] border-brown/20 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-brown/10" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-brown/10 rounded" />
        <div className="h-3 bg-brown/10 rounded w-3/4" />
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-brown/10 last:border-b-0 animate-pulse">
      <div className="w-6 h-4 bg-brown/10 rounded" />
      <div className="w-12 h-12 bg-brown/10 rounded-lg" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-brown/10 rounded w-1/2" />
        <div className="h-3 bg-brown/10 rounded w-1/3" />
      </div>
      <div className="w-16 h-4 bg-brown/10 rounded" />
    </div>
  );
}

export default function MusicLoading() {
  return (
    <Container>
      <Row>
        <Column xs={12}>
          <div className="flex items-center gap-4 animate-pulse">
            <div className="w-14 h-14 rounded-full bg-brown/10" />
            <div className="space-y-2">
              <div className="h-8 w-32 bg-brown/10 rounded" />
              <div className="h-4 w-48 bg-brown/10 rounded" />
            </div>
          </div>
        </Column>
      </Row>

      <Row className="mt-8">
        <Column xs={12}>
          <div className="h-8 w-32 bg-brown/10 rounded mb-5 animate-pulse" />
          <div className="flex gap-6 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </Column>
      </Row>

      <Row className="mt-8">
        <Column xs={12} lg={8}>
          <div className="h-8 w-40 bg-brown/10 rounded mb-5 animate-pulse" />
          <div className="bg-tan border-[3px] border-brown/20 rounded-2xl p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </div>
        </Column>
      </Row>
    </Container>
  );
}
