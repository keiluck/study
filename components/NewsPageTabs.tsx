'use client';

import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import NewsAccordion from '@/components/NewsAccordion';

export default function NewsPageTabs({ t }: { t: any }) {
  const [value, setValue] = useState(0);

  const data = [
    t.newsPage.japan,
    t.newsPage.western,
    t.newsPage.hongkong,
  ];

  return (
    <section style={{ padding: '24px 16px' }}>
      <h1>{t.newsPage.title}</h1>

      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label={t.newsPage.tabs.japan} />
        <Tab label={t.newsPage.tabs.western} />
        <Tab label={t.newsPage.tabs.hongkong} />
      </Tabs>

      <Box mt={2}>
        <NewsAccordion list={data[value]} />
      </Box>
    </section>
  );
}
