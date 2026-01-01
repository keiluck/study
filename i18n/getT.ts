// import { messages } from './index';

/**
 * 统一获取多语言文案（Next.js 16 安全兜底）
 * @param lang URL 中的 lang，如 zh / ja
 */
import { dictionaries, type Lang, type Dictionary } from './index';

export function getT(lang?: string): {
  lang: Lang;
  t: Dictionary;
} {
  const safeLang: Lang = lang === 'ja' ? 'ja' : 'zh';

  return {
    lang: safeLang,
    t: dictionaries[safeLang],
  };
}
