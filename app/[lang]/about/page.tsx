import { getT } from '@/i18n/getT';
import AboutPageView from '@/components/about/AboutPageView';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const { t } = getT((await params).lang);

  // t.about 必须符合 AboutPage
  return <AboutPageView data={t.about} />;
}
