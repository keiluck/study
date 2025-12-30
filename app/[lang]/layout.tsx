import { getT } from '@/i18n/getT';
import Header from '@/components/Header';
import RouteCards from '@/components/RouteCards';
import Footer from '@/components/Footer';

export default async function Home({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const { lang, t } = getT((await params).lang);

  return (
    <>
      <Header lang={lang} />

      <section style={styles.hero}>
        <h1>{t.home.title}</h1>
        <h2>{t.home.subtitle}</h2>
        <p>{t.home.desc}</p>
        <button>{t.common.viewRoute}</button>
      </section>

      <RouteCards t={t} lang={lang} />

      <Footer />
    </>
  );
}

const styles = {
  hero: {
    padding: '60px 20px',
    background: 'linear-gradient(135deg,#eef3ff,#fff)',
  },
};
