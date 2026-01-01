'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

/**
 * 新闻 Accordion
 */
export default function NewsAccordion({ t }: { t: any }) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) =>
    (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section style={{ padding: '24px 16px', borderRadius: 8 }}>
      <Typography variant="h6" gutterBottom >
        {t.news.title}
      </Typography>

      {t.news.list.map((item: any, index: number) => {
        const panelId = `panel-${index}`;

        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            style={{  borderRadius: 10 , border: 'none' }}
          >
            <AccordionSummary
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              style={{ background: '#fff', border: 'none', borderBottom: '1px solid #eee' }}
            >
              <Typography component="span" >
                {item.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>

                <div style={{ display:'flex',justifyContent:'flex-start'  }}    >

                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: '30%',
                    maxHeight: 180,
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
            

              <Typography variant="body2" style={{
                    width: '60%',
                    maxHeight: 180,
                    marginLeft:16,
                  }}>
                {item.desc}
              </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </section>
  );
}
