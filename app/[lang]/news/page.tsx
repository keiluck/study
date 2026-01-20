// app/[lang]/news/page.tsx
import zh from '@/i18n/zh';
import ja from '@/i18n/ja';
import NewsPageView from '@/components/news/NewsPageView';

export default function NewsPage({
  params,
}: {
  params: { lang: 'zh' | 'ja' };
}) {
  const lang = params.lang;
  const dict = lang === 'ja' ? ja : zh;

  return <NewsPageView lang={lang} data={dict.newsPage} />;
}
