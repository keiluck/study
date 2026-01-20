'use client';
import { AboutPage } from '../../i18n/types';

export default function AboutPageView({ data }: { data: AboutPage }) {
  return (
    <>
      <section className="about">
        <h1 className="about-title">{data.title}</h1>
        <p className="about-intro">{data.intro}</p>

        {/* Mission */}
        <div className="about-block">
          <h2>{data.mission.title}</h2>
          <p>{data.mission.desc}</p>
        </div>

        {/* Services */}
        <div className="about-block">
          <h2>{data.services.title}</h2>
          <ul className="about-services">
            {data.services.items.map((s: string) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Regions */}
        <div className="about-block">
          <h2>{data.regions.title}</h2>
          <div className="about-regions">
            {data.regions.list.map(r => (
              <div key={r.key} className="region">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="about-block contact">
          <h2>{data.contact.title}</h2>

          {data.contact.offices.map(o => (
            <p key={o.country}>
              <strong>{o.country}：</strong>
              {o.address}
            </p>
          ))}

          <p><strong>Email：</strong>{data.contact.email}</p>
          <p><strong>微信：</strong>{data.contact.wechat}</p>
        </div>
      </section>

      {/* ===== CSS 写在页面下面 ===== */}
      <style jsx>{`
        .about {
          max-width: 1000px;
          margin: 0 auto;
          padding: 56px 24px;
          color: #222;
          line-height: 1.8;
        }

        .about-title {
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .about-intro {
          font-size: 18px;
          color: #555;
          margin-bottom: 40px;
          max-width: 720px;
        }

        .about-block {
          margin-bottom: 48px;
        }

        .about-block h2 {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 16px;
          padding-left: 12px;
          border-left: 4px solid #1976d2;
        }

        .about-services {
          list-style: none;
          padding-left: 0;
        }

        .about-services li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 10px;
        }

        .about-services li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: #1976d2;
        }

        .about-regions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-top: 20px;
        }

        .region {
          background: #f9fafb;
          border-radius: 10px;
          padding: 22px 20px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .region:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .region h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .contact {
          background: #f1f5f9;
          border-radius: 12px;
          padding: 28px 24px;
        }

        .contact p {
          margin: 8px 0;
        }

        @media (max-width: 600px) {
          .about {
            padding: 40px 16px;
          }

          .about-title {
            font-size: 28px;
          }

          .about-intro {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
