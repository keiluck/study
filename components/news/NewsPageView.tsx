'use client';

import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import NewsAccordion from './NewsAccordion';
import { NewsPage } from '@/i18n/types';

export default function NewsPageView({
  lang,
  data,
}: {
  lang: 'zh' | 'ja';
  data: NewsPage;
}) {
  const [value, setValue] = useState(0);

  const tabKeys = ['japan', 'western', 'hongkong'] as const;
  const list = data[tabKeys[value]];

  return (
    <section className="page">
      <h1 className="page-title">{data.title}</h1>

      <div className="tabs-wrapper">
        <Tabs
          value={value}
          onChange={(_, v) => setValue(v)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label={data.tabs.japan} />
          <Tab label={data.tabs.western} />
          <Tab label={data.tabs.hongkong} />
        </Tabs>
      </div>

      <Box mt={3}>
        <div className="news-list">
          <NewsAccordion lang={lang} list={list} />
        </div>
      </Box>

      {/* CSS（必要なら） */}
      <style jsx>{`
        .page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 56px 24px;
          color: #222;
          line-height: 1.8;
        }

        .page-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .tabs-wrapper {
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 24px;
        }

        .news-list {
          background: #fafafa;
          border-radius: 12px;
          padding: 8px 0;
        }

        :global(.MuiTab-root) {
          text-transform: none;
          min-width: auto;
          padding: 12px 20px;
          font-size: 15px;
          font-weight: 500;
        }

        :global(.MuiTab-root.Mui-selected) {
          color: #1976d2;
          font-weight: 600;
        }

        :global(.MuiTabs-indicator) {
          height: 3px;
          border-radius: 3px;
          background-color: #1976d2;
        }

        @media (max-width: 600px) {
          .page {
            padding: 40px 16px;
          }
          .page-title {
            font-size: 26px;
          }
          :global(.MuiTab-root) {
            padding: 10px 14px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
