import { getT } from '@/i18n/getT';
import Header from '@/components/Header';
//import Hero from '@/components/Hero';
import RouteCards from '@/components/RouteCards';

export default async function Home({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const { lang, t } = getT((await params).lang);

  return (
    <>
      <Header lang={lang} />
      {/* <Hero t={t} /> */}
      <RouteCards t={t} lang={lang} />
    </>
  );
}
