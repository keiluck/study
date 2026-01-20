'use client';
import { useParams } from 'next/navigation';
import zh from '@/i18n/zh';
import ja from '@/i18n/ja';
import { NewsItem } from '@/i18n/types';

export default function NewsDetailPage() {
  const { lang, id } = useParams() as { lang: 'zh' | 'ja'; id: string } ;

  const dict = lang === 'ja' ? ja : zh;

  const allNews: NewsItem[] = [
    ...dict.newsPage.japan,
    ...dict.newsPage.western,
    ...dict.newsPage.hongkong,
  ];

  const news = allNews.find(item => item.id === id);

  if (!news) {
    return <p style={{ padding: 40 }}>Not Found</p>;
  }

  return (
    <article className="news-detail">
      <h1 className="news-title">{news.title}</h1>
      <div className="news-date">{news.date}</div>

      <p className="news-summary">{news.summary}</p>

      <div className="news-content">
        {news.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <a href={`/${lang}/news`} className="back-btn">
        ← 返回
      </a>

      <style jsx>{`
        .news-detail {
          max-width: 800px;
          margin: 0 auto;
          padding: 56px 24px;
          line-height: 1.9;
          color: #222;
        }
        .news-title {
          font-size: 30px;
          font-weight: 700;
        }
        .news-date {
          color: #888;
          margin-bottom: 20px;
        }
        .back-btn {
          display: inline-block;
          margin-top: 40px;
          color: #1976d2;
          text-decoration: none;
        }
      `}</style>
    </article>
  );
}
