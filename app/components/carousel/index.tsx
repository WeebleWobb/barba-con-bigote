'use client'

import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import Pagination from './pagination'
import CaseStudyCard from '@/components/case-study/card'
import type { CaseStudyEntry } from '@/data/case-studies'

interface CarouselProps {
  items: CaseStudyEntry[]
  options?: EmblaOptionsType
  className?: string
}

export default function Carousel({
  items,
  options = {
    align: 'start',
    loop: true,
  },
  className = ''
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className={`overflow-hidden ${className}`} ref={emblaRef}>
        <div className="flex pb-2">
          {items.map((item, index) => (
            <div
              className="flex-[0_0_66.666%] min-w-0"
              key={index}
            >
              <CaseStudyCard
                img={{ src: item.image, alt: item.title }}
                title={item.title}
                cta={{ text: 'View Case Study', href: item.link }}
              />
            </div>
          ))}
        </div>
      </div>

      <Pagination
        onScrollPrev={scrollPrev}
        onScrollNext={scrollNext}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
        selectedIndex={selectedIndex}
        totalCount={items.length}
        onDotClick={(index) => emblaApi?.scrollTo(index)}
      />
    </div>
  )
} 