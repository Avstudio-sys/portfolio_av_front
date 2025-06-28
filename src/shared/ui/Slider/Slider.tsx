'use client'
import React, { useState, useMemo, useRef, useEffect } from 'react'
import styles from './Slider.module.css'
import { ArrowIcon } from '@/shared/ui/IconsComponent/ArrowIcon'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import { useContainerWidth } from '@/shared/hooks/useContainerWidth'

type propsSliderT = {
  slides: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

const SWIPE_THRESHOLD = 25
const SWIPE_VELOCITY = 200
const DEFAULT_AUTO_PLAY_INTERVAL = 5000 // 5 секунд

export const Slider: React.FC<propsSliderT> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = DEFAULT_AUTO_PLAY_INTERVAL,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [direction, setDirection] = useState<number>(1)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const dragControls = useDragControls()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const width = useContainerWidth(wrapperRef)
  const intervalRef = useRef<NodeJS.Timeout>(null)

  const cardsPerSlide = width < 500 ? 1 : width < 800 ? 2 : 3

  const visibleSlides = useMemo(() => {
    if (slides.length <= cardsPerSlide) return slides
    const end = currentSlide + cardsPerSlide
    return slides
      .slice(currentSlide, end)
      .concat(end > slides.length ? slides.slice(0, end - slides.length) : [])
  }, [slides, currentSlide, cardsPerSlide])

  const nextSlide = (): void => {
    setDirection(1)
    setCurrentSlide((prev) =>
      prev + cardsPerSlide >= slides.length ? 0 : prev + cardsPerSlide
    )
  }

  const prevSlide = (): void => {
    setDirection(-1)
    setCurrentSlide((prev) =>
      prev - cardsPerSlide < 0
        ? slides.length - (slides.length % cardsPerSlide || cardsPerSlide)
        : prev - cardsPerSlide
    )
  }

  const startAutoPlay = () => {
    if (!autoPlay) return

    stopAutoPlay() // Останавливаем предыдущий интервал

    intervalRef.current = setInterval(() => {
      if (!isDragging) {
        nextSlide()
      }
    }, autoPlayInterval)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [autoPlay, autoPlayInterval, currentSlide, isDragging])

  const handleDragStart = () => {
    setIsDragging(true)
    stopAutoPlay()
  }

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false)

    if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY) {
      prevSlide()
    } else if (
      info.offset.x < -SWIPE_THRESHOLD ||
      info.velocity.x < -SWIPE_VELOCITY
    ) {
      nextSlide()
    }

    startAutoPlay()
  }

  return (
    <div className={styles.slider}>
      <button
        className={`${styles.slider__btn} ${styles.slider__left}`}
        onClick={prevSlide}
      >
        <ArrowIcon />
      </button>
      <button
        className={`${styles.slider__btn} ${styles.slider__right}`}
        onClick={nextSlide}
      >
        <ArrowIcon />
      </button>
      <motion.div
        className={styles.slider__wrapper}
        ref={wrapperRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        dragControls={dragControls}
        dragElastic={0.1}
      >
        <AnimatePresence custom={direction} mode="popLayout">
          {visibleSlides.map((slide, id) => {
            const uniqueKey = `slide-${currentSlide}-${id}`
            return (
              <motion.div
                key={uniqueKey}
                className={styles.card}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction: number) => ({
                    x: direction < 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                layout
              >
                {slide}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
