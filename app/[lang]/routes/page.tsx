import { getT } from '@/i18n/getT';

export default async function RoutesPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const { t } = getT((await params).lang);

  return (
    <main style={{ padding: 24 }}>
      <h1>路线总览</h1>
      {Object.values(t.routes).map((r: any) => (
        <div key={r.title}>
          <h3>{r.title}</h3>
          <p>{r.desc}</p>
        </div>
      ))}
    </main>
  );
}
