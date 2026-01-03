'use client';

import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { NewsPage } from '../../i18n/types';
import NewsAccordion from './NewsAccordion';

export default function NewsPageView({ data }: { data: NewsPage }) {
  const [value, setValue] = useState(0);

  const tabKeys = ['japan', 'western', 'hongkong'] as const;
  const list = data[tabKeys[value]];

  return (
    <section className="page">
      <h1>{data.title}</h1>

      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label={data.tabs.japan} />
        <Tab label={data.tabs.western} />
        <Tab label={data.tabs.hongkong} />
        {/* <Tab label={data.tabs.studyTour} /> */}
      </Tabs>

      <Box mt={2}>
        <NewsAccordion list={list} />
      </Box>
    </section>
  );
}
