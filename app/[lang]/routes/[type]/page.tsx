import { getT } from '@/i18n/getT';
import { RouteItem } from '@/i18n/types';

export default async function RouteDetail({
  params,
}: {
  params: Promise<{ lang?: string; type?: string }>;
}) {
  const { lang, t } = getT((await params).lang);
  const type = (await params).type as keyof typeof t.routes;

  const route = t.routes[type] as RouteItem | undefined;

  if (!route) return <div>Not Found</div>;

  return (
    <main style={{ padding: 24 }}>
      <h1>{route.title}</h1>
      <p>{route.desc}</p>
      <div>
        {Array.isArray(route?.content) &&
    route.content.map((section, index) => {
      switch (section.type) {
        case 'text':
          return (
            <section key={index}>
              {section.title && <h2>{section.title}</h2>}
              <p>{section.text}</p>
            </section>
          );

        case 'image':
          return (
            <section key={index}>
              {section.title && <h2>{section.title}</h2>}
              <img src={section.image} alt={section.alt || ''} />
            </section>
          );

        case 'list':
          return (
            <section key={index}>
              {section.title && <h2>{section.title}</h2>}
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          );

        default:
          return (
            <pre key={index}>
              {JSON.stringify(section, null, 2)}
            </pre>
          );
      }
    })}
      </div>

    </main>
  );
}
