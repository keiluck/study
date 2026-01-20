'use client';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { NewsItem } from '@/i18n/types';

export default function NewsAccordion({
  list,
  lang,
}: {
  list: NewsItem[];
  lang: 'zh' | 'ja';
}) {
  return (
    <>
      {list.map(item => (
        <Accordion key={item.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', borderRadius: 10, marginBottom: 12 }}
            />

            <div className="news-item">
              <Link href={`/${lang}/news/${item.id}`} className="news-link">
                {item.title}
              </Link>
              <div className="news-date">{item.date}</div>
            </div>

            <Typography sx={{ color: '#444' }}>{item.desc}</Typography>

            <style jsx>{`
              .news-item {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 12px;
                margin: 6px 0 10px;
              }

              .news-link {
                font-weight: 600;
                color: #1976d2;
                text-decoration: none;
              }

              .news-link:hover {
                text-decoration: underline;
              }

              .news-date {
                font-size: 12px;
                color: #888;
                white-space: nowrap;
              }
            `}</style>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
