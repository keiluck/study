import { messages } from './index';

/**
 * 统一获取多语言文案（Next.js 16 安全兜底）
 * @param lang URL 中的 lang，如 zh / ja
 */
export function getT(lang?: string) {
  const safeLang: 'zh' | 'ja' = lang === 'ja' ? 'ja' : 'zh';

  return {
    lang: safeLang,
    t: messages[safeLang],
  };
}
