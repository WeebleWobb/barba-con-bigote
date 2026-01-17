interface PaginationProps {
  onScrollPrev: () => void
  onScrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

export default function Pagination({
  onScrollPrev,
  onScrollNext,
  canScrollPrev,
  canScrollNext
}: PaginationProps) {
  return (
    <div className="flex gap-2 mt-1">
      <button
        onClick={onScrollPrev}
        disabled={!canScrollPrev}
        className="w-8 h-8 rounded-md flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:text-orange transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onScrollNext}
        disabled={!canScrollNext}
        className="w-8 h-8 rounded-md flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:text-orange transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
} 