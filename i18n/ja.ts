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
      id:'01',
      image: '/images/pic001.jpeg',
      title: '中学・高校進学',
      desc: '日本の中学・高校進学ルート。',
    },
    university: {
      id:'02',  
      image: '/images/pic002.jpeg',
      title: '大学・大学院',
      desc: '学部・大学院進学支援。',
    },
    work: {
      id:'03',
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

  schoolsList: {
  japan: [
    {
      id: 'tokyo-university',
      region: 'japan',
      name: '东京大学',
      desc: '日本顶级国立大学。',
      image: '/images/schools/pic001.jpeg',
    },
    {
      id: 'waseda',
      region: 'japan',
      name: '早稻田大学',
      desc: '日本著名私立大学。',
      image: '/images/schools/pic002.jpeg',
    },
  ],
  western: [
    {
      id: 'harvard',
      region: 'western',
      name: '哈佛大学',
      desc: '世界顶级私立大学。',
      image: '/images/schools/pic003.jpeg',
    },
  ],
  hongkong: [
    {
      id: 'hku',
      region: 'hongkong',
      name: '香港大学',
      desc: '香港历史最悠久的大学。',
      image: '/images/schools/pic003.jpeg',
    },
  ],
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


  newsPage: {
  title: 'ニュース',
  tabs: {
    japan: '日本',
    western: '欧米',
    hongkong: '香港',
  },
  japan: [
    {
      title: '日本留学政策の最新情報',
      desc: '最新のビザ・進学制度について。',
      image: '/images/news/jp-1.jpeg',
    },
  ],
  western: [
    {
      title: '欧米大学の入学動向',
      desc: '欧米名門校の最新動向。',
      image: '/images/news/west-1.jpeg',
    },
  ],
  hongkong: [
    {
      title: '香港大学入試情報',
      desc: '香港の大学入試最新情報。',
      image: '/images/news/hk-1.jpeg',
    },
  ],
},

about: {
  title: '会社紹介',
  intro:
    '日本および海外進学・就職を支援する総合サービス会社です。',
  mission:
    '一人ひとりに最適な国際キャリアパスを提供します。',
  services: [
    '日本中学・高校進学支援',
    '大学・大学院進学サポート',
    '日本就職・ビザ支援',
  ],
},

};

export default ja;
