'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dictionary, Lang } from '@/i18n';
import styles from '@/styles/responsive.module.css';

export default function Header({
  lang,
  t,
}: {
  lang: Lang;
  t: Dictionary;
}) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: `/${lang}/routes`, label: t.nav.routes },
    { href: `/${lang}/schools`, label: t.nav.schools },
    { href: `/${lang}/news`, label: t.nav.news },
    { href: `/${lang}/about`, label: t.nav.about },
  ];

  const switchLang = lang === 'zh' ? 'ja' : 'zh';

  return (
    <header className={`${styles.header} ${open ? styles.headerOpen : ''}`}>
      <div className={styles.inner}>
                 {/* 移动端菜单按钮 */}
          <button
            className={styles.menuBtn}
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        {/* 左侧：Logo + PC 菜单 */}
        <div className={styles.left}>
          <Link href={`/${lang}`} className={styles.logo}>
            赴日路线规划
          </Link>



          {/* PC 菜单 */}
          <nav className={styles.pcNav}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* 右侧：语言 + 移动端菜单 */}
        <div className={styles.right}>
          {/* 语言切换（PC + Mobile 都显示） */}
          <Link href={`/${switchLang}`} className={styles.langSwitch}>
            {lang === 'zh' ? '日本語' : '中文'}
          </Link>


        </div>
      </div>

      {/* 移动端 Drawer */}
      {open && (
        <div className={styles.mobileMenu} >
          <div className={styles.mobileHeader}>
            <span>{t.common.menu}</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <nav className={styles.mobileNav} >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* 移动端语言切换 */}
            <Link
              href={`/${switchLang}`}
              className={styles.mobileLang}
            >
              {lang === 'zh' ? '日本語' : '中文'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
