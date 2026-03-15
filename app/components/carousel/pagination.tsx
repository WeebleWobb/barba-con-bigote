interface PaginationProps {
  onScrollPrev: () => void
  onScrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  totalCount: number
  onDotClick: (index: number) => void
}

export default function Pagination({
  onScrollPrev,
  onScrollNext,
  canScrollPrev,
  canScrollNext,
  selectedIndex,
  totalCount,
  onDotClick
}: PaginationProps) {
  return (
    <div className="flex items-center gap-2 mt-1">
      <button
        onClick={onScrollPrev}
        disabled={!canScrollPrev}
        className="w-8 h-8 rounded-md flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:text-orange transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onScrollNext}
        disabled={!canScrollNext}
        className="w-8 h-8 rounded-md flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:text-orange transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="flex gap-1.5 ml-2">
        {Array.from({ length: totalCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              index === selectedIndex ? 'bg-orange' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 