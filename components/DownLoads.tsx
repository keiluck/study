import { Icon } from '@mui/material';
import Link from 'next/link';

type Props = {
  lang: string;
  t: any; // 如果你有 i18n 类型，这里可以换成具体类型
};

export default function DownloadLink({ lang, t }: Props) {
  return (
    <div style={{ margin: 15 }}>
      <Link
        href={`/${lang}/downloads`}
        style={{
          textDecoration: 'none',
          color: '#333',
          fontSize: 18,
        }}
      >
        {t.downloads.title} 
        <Icon style={{ verticalAlign: 'middle', margin: 8 }}>📥</Icon>
        <p style={{ margin: 0,fontSize: 14 }}>{t.downloads.desc}</p>
      </Link>
    </div>
  );
}
