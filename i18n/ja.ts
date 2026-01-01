import { Dictionary } from './types';

const ja: Dictionary = {
  common: {
    menu: 'メニュー',
    viewRoute: 'ルートを見る',
  },

  nav: {
    home: 'ホーム',
    routes: '進学ルート',
    schools: '学校紹介',
    news: 'ニュース',
    about: '会社案内',
  },

  home: {
    title: '日本進学・就職プラットフォーム',
    subtitle: '日本への最適ルートを提供',
    desc: '中学・高校・大学・就職まで対応。',
  },

  routes: {
    junior: {
      image: '/images/pic001.jpeg',
      title: '中学・高校進学',
      desc: '日本の中学・高校進学ルート。',
    },
    university: {
      image: '/images/pic002.jpeg',
      title: '大学・大学院',
      desc: '学部・大学院進学支援。',
    },
    work: {
      image: '/images/pic003.jpeg',
      title: '就職',
      desc: '特定技能・人文知識ビザ。',
    },
  },

  schools: {
    title: '学校紹介',
    tabs: {
      japan: '日本',
      western: '欧米',
      hongkong: '香港',
    },
    japan: {
      title: '日本の学校',
      desc: '日本の教育機関を紹介。',
    },
    western: {
      title: '欧米の学校',
      desc: '欧米の教育機関。',
    },
    hongkong: {
      title: '香港の学校',
      desc: '香港の教育機関。',
    },
  },

  news: {
    title: 'ニュース',
    list: [
      {
        title: '2024年 日本留学政策',
        desc: '最新の制度情報。',
        image: '/images/pic001.jpeg',
      },
      {
        title: '2025年 日本留学政策',
        desc: '最新の制度情報。',
        image: '/images/pic002.jpeg',
      },
      {
        title: '2026年 日本留学政策',
        desc: '最新の制度情報。',
        image: '/images/pic003.jpeg',
      },
    ],
  },
};

export default ja;
