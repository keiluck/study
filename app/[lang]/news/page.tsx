import { getT } from '@/i18n/getT';
import NewsPageView from '@/components/news/NewsPageView';

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  // 1️⃣ 获取语言
  const { t } = getT((await params).lang);

  // 2️⃣ 只把 newsPage 传给页面组件
  return <NewsPageView data={t.newsPage} />;
}