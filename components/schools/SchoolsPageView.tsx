import Link from 'next/link';
import { SchoolsPage } from '../../i18n/types';

export default function SchoolsPageView({
  data,
  lang,
}: {
  data: SchoolsPage;
  lang: string;
}) {
  return (
    <section className="page">
      <h1>{data.title}</h1>

      <div className="grid">
        {data.categories.map((c) => (
          <Link key={c.id} href={`/${lang}/schools/${c.id}`}>
            <div className="card">
              <img src={c.image} alt={c.title} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
