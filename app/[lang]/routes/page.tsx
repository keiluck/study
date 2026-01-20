
import { getT } from '@/i18n/getT';
import Link from 'next/link';
import { Button } from '@mui/material';

export default async function RoutesPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const { t, lang } = getT((await params).lang);

  // 和 RouteCards 保持一致：用 Object.entries
  const routes = Object.entries(t.routes);
  console.log('routes:', routes);

  return (
    <main style={{ padding: 24 }}>
      {/* <h1>{t.routes}</h1> */}

      <section style={styles.grid}>
        {routes.map(([key, r]: any) => (
          <div key={key} style={styles.card}>
            {/* 和 RouteCards 一样，显示 image */}
            {r.image && (
              <img
                src={r.image}
                alt={r.title}
                style={{ width: '150px', height: '120px', borderRadius: 8 }}
              />
            )}

            <div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>

              {/* 和 RouteCards 完全一致的跳转规则 */}
              <Link href={`/${lang}/routes/${key}`}>
                <Button>{t.common.viewRoute}</Button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
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
