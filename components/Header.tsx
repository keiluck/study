'use client';

import Link from 'next/link';

export default function Header({ lang }: { lang: 'zh' | 'ja' }) {
  const siteName = lang === 'ja' ? '日本進路プラン' : '赴日路线规划';

  return (
    <header style={styles.header}>
      <strong>{siteName}</strong>
      <nav>
        <Link href="/zh">中文</Link> | <Link href="/ja">日本語</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: '#fff',
    padding: '14px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
};
