import Link from 'next/link';
import { Button } from '@mui/material';

export default function RouteCards({
  t,
  lang,
}: {
  t: any;
  lang: 'zh' | 'ja';
}) {
  const routes = Object.entries(t.routes);

  return (
    <section style={styles.grid}>
      {routes.map(([key, r]: any) => (
        <div key={key} style={styles.card}>
          <img src={r.imgage} alt={r.title} style={{ width: '150px', height: '120px', borderRadius: 8 }} />
          <div>
          <h3>{r.title}</h3>
          <p>{r.desc}</p>
          <Link href={`/${lang}/routes/${key}`}>
            <Button size='small'>{t.common.viewRoute}</Button>
          </Link>
          </div>

        </div>
      ))}
    </section>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gap: 16,
    padding: 5,
    fontSize: 14,
    gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
  },
  card: {
    background: '#fff',
    padding: 10,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    gap: 15,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};
