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
      id:'01',
      image: '/images/pic001.jpeg',
      title: '初高中赴日',
      desc: '面向初高中生的日本升学路线。',
    },
    university: {
      id:'02',    
      image: '/images/pic002.jpeg',
      title: '大学 / 大学院',
      desc: '本科与研究生升学规划。',
    },
    work: {
      id:'03',
      image: '/images/pic003.jpeg',
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
    title: '新闻资讯',
    list: [
      {
        title: '2025 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic001.jpeg',
      },
      {
        title: '2025 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic002.jpeg',
      },
      {
        title: '2026 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic003.jpeg',
      },
    ],
  },

  newsPage: {
  title: '新闻资讯',
  tabs: {
    japan: '日本',
    western: '欧美',
    hongkong: '香港',
  },
  japan: [
    {
      title: '日本留学政策更新',
      desc: '最新日本留学签证与升学政策解读。',
      image: '/images/pic001.jpeg',
    },
  ],
  western: [
    {
      title: '欧美高校申请趋势',
      desc: '欧美名校申请最新趋势分析。',
      image: '/images/pic002.jpeg',
    },
  ],
  hongkong: [
    {
      title: '香港大学招生说明',
      desc: '香港高校最新招生政策。',
      image: '/images/pic003.jpeg',
    },
  ],
},

about: {
  title: '关于我们',
  intro:
    '我们专注于日本及海外升学与就职规划，提供一站式国际发展服务。',
  mission:
    '帮助学生和社会人士找到最适合自己的国际发展路径。',
  services: [
    '日本初高中升学规划',
    '大学 / 大学院申请',
    '日本就职与签证服务',
  ],
},



};

export default zh;
