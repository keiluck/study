import zh from './zh';
import ja from './ja';

export const dictionaries = {
  zh,
  ja,
};

export type Lang = keyof typeof dictionaries;
export type Dictionary = typeof zh;

