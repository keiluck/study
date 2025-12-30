import Link from 'next/link';

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
          <h3>{r.title}</h3>
          <p>{r.desc}</p>
          <Link href={`/${lang}/routes/${key}`}>
            <button>{t.common.viewRoute}</button>
          </Link>
        </div>
      ))}
    </section>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gap: 16,
    padding: 20,
    gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
  },
  card: {
    background: '#fff',
    padding: 20,
    borderRadius: 12,
  },
};
