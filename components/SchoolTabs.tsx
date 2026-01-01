'use client';

import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import styles from '@/styles/responsive.module.css';

export default function SchoolTabs({ t }: { t: any }) {
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{t.schools.title} </h2>

      {/* Tabs Header */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab label={t.schools.tabs.japan} />
        <Tab label={t.schools.tabs.western} />
        <Tab label={t.schools.tabs.hongkong} />
      </Tabs>

      {/* 内容区 */}
      <Box className={styles.schoolContentWrapper}>
        {value === 0 && (
          <div className={styles.schoolContent}>
            <img src="/images/pic001.jpeg" className={styles.schoolImage} />
            <div>
              <h3>{t.schools.japan.title}</h3>
              <p>{t.schools.japan.desc}</p>
            </div>
          </div>
        )}

        {value === 1 && (
          <div className={styles.schoolContent}>
            <img src="/images/pic002.jpeg" className={styles.schoolImage} />
            <div>
              <h3>{t.schools.western.title}</h3>
              <p>{t.schools.western.desc}</p>
            </div>
          </div>
        )}

        {value === 2 && (
          <div className={styles.schoolContent}>
            <img src="/images/pic003.jpeg" className={styles.schoolImage} />
            <div>
              <h3>{t.schools.hongkong.title}</h3>
              <p>{t.schools.hongkong.desc}</p>
            </div>
          </div>
        )}
      </Box>
    </section>
  );
}
