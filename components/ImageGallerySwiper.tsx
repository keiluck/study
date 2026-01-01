'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ImageGallerySwiper() {
  const imgs = [
    '/images/img/img001.jpeg',
    '/images/img/img002.jpeg',
    '/images/img/img003.jpeg',
    '/images/img/img004.jpeg',
    '/images/img/img005.jpeg',
    '/images/img/img006.jpeg',
    '/images/img/img007.jpeg',
    '/images/img/img008.jpeg',
  ];

  return (
    <section style={{ padding: '24px 0' }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{ 768: { slidesPerView: 5 } }}
      >
        {imgs.map((src) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt=""
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
