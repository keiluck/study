import { AboutPage } from '../../i18n/types';

export default function AboutPageView({ data }: { data: AboutPage }) {
  return (
    <section className="page">
      <h1>{data.title}</h1>

      <p>{data.intro}</p>

      {/* <h2>Vision</h2>
      <p>{data.vision}</p> */}

      <h2>Mission</h2>
      <p>{data.mission}</p>

      <h2>Services</h2>
      <ul>
        {data.services.map((s:any) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
