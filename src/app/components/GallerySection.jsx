'use client'
import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const galleryImages = [
  '/images/cake1.webp',
  '/images/cake2.jpg',
  '/images/cake3.webp',
  '/images/about.avif',
  '/images/about.avif',
]

export default function GallerySection() {
  const swiperRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current
      swiperRef.current.swiper.navigation.init()
      swiperRef.current.swiper.navigation.update()
    }
  }, [])

  return (
    <section className="bg-amber-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-amber-900 text-center mb-12">
          Our Sweet Creations
        </h2>
        
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-pink-300',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-amber-600',
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-amber-600 hover:bg-amber-100 transition-colors -ml-4"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-amber-600 hover:bg-amber-100 transition-colors -mr-4"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}