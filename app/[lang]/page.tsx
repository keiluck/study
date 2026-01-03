import { getT } from '@/i18n/getT';
//import Header from '@/components/Header';
//import Hero from '@/components/Hero';
import RouteCards from '@/components/RouteCards';
import HeroSwiper from '@/components/HeroSwiper';
import SchoolTabs from '@/components/SchoolTabs';
import NewsList from '@/components/NewsList';
import ImageGallerySwiper from '@/components/ImageGallerySwiper';


export default async function Home({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const { lang, t } = getT((await params).lang);

  return (
    <>
      {/* Swiper Hero */}
      <HeroSwiper t={t} />
      <RouteCards t={t} lang={lang} />
      <SchoolTabs t={t} />
      <NewsList t={t} />
      <ImageGallerySwiper />
    </>
  );
}
