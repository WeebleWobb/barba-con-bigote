'use client'

import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import Pagination from './pagination'

interface CarouselItem {
  src: string
  alt: string
  name: string
  title: string
}

interface CarouselProps {
  items: CarouselItem[]
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
        <div className="flex pb-4">
          {items.map((item, index) => (
            <div
              className="flex-[0_0_66.666%] min-w-0 pr-6"
              key={index}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white h-[500px]">
                <img
                  className="w-full h-full object-cover"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-2xl font-bold mb-1">{item.name}</h3>
                  <p className="text-white/90 text-base">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        onScrollPrev={scrollPrev}
        onScrollNext={scrollNext}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />
    </div>
  )
} 