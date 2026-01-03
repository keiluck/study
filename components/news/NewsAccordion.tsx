'use client';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NewsItem } from '../../i18n/types';

export default function NewsAccordion({ list }: { list: NewsItem[] }) {
  return (
    <>
      {list.map((item, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', borderRadius: 8, marginBottom: 12 }}
            />
            <Typography>{item.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
