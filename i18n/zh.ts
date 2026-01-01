import { Dictionary } from './types';

const zh: Dictionary = {
  common: {
    menu: '菜单',
    viewRoute: '查看路线',
  },

  nav: {
    home: '首页',
    routes: '路线规划',
    schools: '学校介绍',
    news: '新闻',
    about: '公司介绍',
  },

  home: {
    title: '赴日升学与就职规划',
    subtitle: '一站式日本路线平台',
    desc: '覆盖初高中、大学、大学院与就职路径。',
  },

  routes: {
    junior: {
      image: '/images/pic001.jpg',
      title: '初高中赴日',
      desc: '面向初高中生的日本升学路线。',
    },
    university: {
      image: '/images/pic002.jpg',
      title: '大学 / 大学院',
      desc: '本科与研究生升学规划。',
    },
    work: {
      image: '/images/pic003.jpg',
      title: '社会人就职',
      desc: '特定技能、人文签证就职支持。',
    },
  },

  schools: {
    title: '学校介绍',
    tabs: {
      japan: '日本',
      western: '欧美',
      hongkong: '香港',
    },
    japan: {
      title: '日本学校',
      desc: '日本初高中、大学、大学院及专门学校。',
    },
    western: {
      title: '欧美学校',
      desc: '欧美国家的高等教育机构。',
    },
    hongkong: {
      title: '香港学校',
      desc: '香港地区国际教育资源。',
    },
  },

  news: {
    title: '新闻资讯',
    list: [
      {
        title: '2025 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic001.jpg',
      },
      {
        title: '2025 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic002.jpg',
      },
      {
        title: '2026 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic003.jpg',
      },
    ],
  },
};

export default zh;
