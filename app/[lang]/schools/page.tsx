import { getT } from '@/i18n/getT';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchoolTabs from '@/components/SchoolTabs';
import NewsList from '@/components/NewsList';
import ImageGallerySwiper from '@/components/ImageGallerySwiper';

export default async function SchoolsPage({ params }: any) {
  const { lang, t } = getT((await params).lang);

  return (
    <>
      <Header lang={lang} t={t} />
      <SchoolTabs t={t} />
      <NewsList t={t} />
      <ImageGallerySwiper />
      <Footer />
    </>
  );
}
