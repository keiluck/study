import { getT } from '@/i18n/getT';

export default async function RouteDetail({
  params,
}: {
  params: Promise<{ lang?: string; type?: string }>;
}) {
  const { lang, t } = getT((await params).lang);
  const type = (await params).type as keyof typeof t.routes;

  const route = t.routes[type];

  if (!route) return <div>Not Found</div>;

  return (
    <main style={{ padding: 24 }}>
      <h1>{route.title}</h1>
      <p>{route.desc}</p>
    </main>
  );
}
