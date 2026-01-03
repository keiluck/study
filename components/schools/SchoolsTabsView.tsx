'use client';

import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Link from 'next/link';
import { SchoolItem } from '../../i18n/types';

export default function SchoolsTabsView({
  title,
  tabs,
  list,
  lang,
}: {
  title: string;
  tabs: {
    japan: string;
    western: string;
    hongkong: string;
  };
  list: {
    japan: SchoolItem[];
    western: SchoolItem[];
    hongkong: SchoolItem[];
  };
  lang: string;
}) {
  const [value, setValue] = useState(0);

  const keys = ['japan', 'western', 'hongkong'] as const;
  const currentList = list[keys[value]];

  return (
    <section className="page">
      {/* Tabs 区 */}
      <Box
        sx={{
          borderBottom: '1px solid #eee',
          mb: 3,
        }}
      >
        <Tabs
          value={value}
          onChange={(_, v) => setValue(v)}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label={tabs.japan} />
          <Tab label={tabs.western} />
          <Tab label={tabs.hongkong} />
        </Tabs>
      </Box>

      {/* 卡片列表 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
          marginLeft:'10px',
          marginRight:'10px',
        }}
      >
        {currentList.map((school) => (
          <Link
            key={school.id}
            href={`/${lang}/schools/${school.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                transition: 'all .25s ease',
                backgroundColor: '#fff',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                },
              }}
            >
              {/* 图片 */}
              <Box
                component="img"
                src={school.image}
                alt={school.name}
                sx={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                }}
              />

              {/* 文本 */}
              <Box sx={{ p: 2 }}>
                <Box
                  component="h3"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    mb: 1,
                    color: '#111',
                  }}
                >
                  {school.name}
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontSize: '0.9rem',
                    color: '#555',
                    lineHeight: 1.6,
                  }}
                >
                  {school.desc}
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </section>
  );
}
