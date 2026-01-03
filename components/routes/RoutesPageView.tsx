import Link from 'next/link';
import { RoutesPage } from  '../../i18n/types';;

export default function RoutesPageView({
  data,
  lang,
}: {
  data: RoutesPage;
  lang: string;
}) {
  return (
    <section className="page">
      <h1>{data.title}</h1>

      <div className="grid">
        {data.items.map((r) => (
          <Link key={r.id} href={`/${lang}/routes/${r.id}`}>
            <div className="card">
              <img src={r.image} alt={r.title} />
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
