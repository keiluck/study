import { getT } from '@/i18n/getT';

export default async function DownloadPage({
  params,
}: {
  params: { lang: string };
}) {
  const { t } = getT((await params).lang);
  const downloads = t.downloads;

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
      <h1>{downloads.title}</h1>
      <p>{downloads.desc}</p>

      {downloads.categories.map(category => (
        <section key={category.key} style={{ marginTop: 32 }}>
          <h2>{category.title}</h2>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {category.items.map(item => (
              <li
                key={item.id}
                style={{
                  border: '1px solid #eee',
                  padding: 16,
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <a href={item.file} download>
                  📄 PDF {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
