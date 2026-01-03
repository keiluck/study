import { getT } from '@/i18n/getT';
import Header from '@/components/Header';

import Footer from '@/components/Footer';


export default async function Home({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const { lang, t } = getT((await params).lang);

  return (
    <>
      <Header lang={lang} t={t} />
      {children}
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
