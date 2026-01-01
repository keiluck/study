'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSwiper({ t }: { t: any }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      slidesPerView={1}
      style={{ width: '100%', }}
    >
      {/* Slide 1：原来的 Hero */}
      <SwiperSlide>
        <section style={styles.hero}>
          <h1>{t.home.title}</h1>
          {/* <h2>{t.home.subtitle}</h2>
          <p>{t.home.desc}</p>
          <button>{t.common.viewRoute}</button> */}
        </section>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <section style={styles.heroAlt}>
          <h1>{t.home.title}</h1>
        </section>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <section style={styles.heroAlt2}>
         <h1>{t.home.title}</h1>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

const styles = {
  hero: {
    padding: '72px 20px',
    textAlign: 'center' as const,
    background: 'linear-gradient(135deg,#eef3ff,#ffffff)',
  },
  heroAlt: {
    padding: '72px 20px',
    textAlign: 'center' as const,
    background: 'linear-gradient(135deg,#fff6e5,#ffffff)',
  },
  heroAlt2: {
    padding: '72px 20px',
    textAlign: 'center' as const,
    background: 'linear-gradient(135deg,#e6f7f0,#ffffff)',
  },
};
