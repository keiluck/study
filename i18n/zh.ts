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
    title: '华益留学与就职规划，从初中到社会人',
    subtitle: '一站式日本路线平台',
    desc: '覆盖初高中、大学、大学院与就职路径。',
  },

  routes: {
junior: {
  id: '01',
  image: '/images/pic001.jpeg',
  title: '初高中赴日',
  desc: '面向初高中生的日本升学路线。',
  content: [
  {
    type: 'text',
    title: '服务对象',
    text: '面向已完成高中阶段教育、大学在读或毕业，并计划报考日本大学本科或大学院（研究生、修士、博士课程）的学生。本项目特别适合希望系统了解日本高等教育体系、明确升学目标、提升日语与学术能力，并通过正规留学生考试途径进入日本国公立或知名私立大学的学生群体。无论是希望跨专业申请，还是以名校升学为目标的学生，均可通过本路径获得针对性的规划与支持。',
  },
  {
    type: 'image',
    title: '日本大学学习环境',
    image: '/images/routes/university/pic002.jpeg',
    alt: '日本大学校园',
  },
  {
    type: 'list',
    title: '服务内容',
    items: [
      '日本大学及大学院整体升学路径规划：结合学生学历背景、日语水平、专业兴趣及未来发展方向，制定清晰、可执行的升学方案',
      '院校与专业精准定位：涵盖日本国公立大学、知名私立大学及特色专业，避免盲目报考，提高合格率',
      'EJU（日本留学考试）及校内考专项对策：包括日语、数学、综合科目或理科科目的系统辅导与模拟训练',
      '研究计划书、志望理由书一对一辅导：从研究方向梳理、逻辑结构到日文表达进行全面指导，突出个人优势',
      '大学及大学院面试模拟训练：还原真实面试场景，提升日语表达能力、逻辑思维与临场应对能力',
      '出愿材料准备与流程管理支持：包括时间节点管理、材料检查、网申及邮寄指导，减少因流程问题导致的失误',
    ],
  },
]

},

university: {
  id: '02',
  image: '/images/pic002.jpeg',
  title: '大学 / 大学院',
  desc: '本科与研究生升学规划。',
  content: [
  {
    type: 'text',
    title: '服务对象',
    text: '面向已完成高中阶段教育、大学在读或大学毕业，并计划报考日本大学本科或大学院（研究生、修士、博士课程）的学生。本项目适合希望系统了解日本高等教育体系、明确个人升学目标、提升日语与学术能力，并通过正规留学生考试与校内选拔进入日本国公立大学或知名私立大学的学生。无论是文科、理科，还是计划跨专业申请的学生，均可通过本服务获得针对性的升学规划与长期支持。',
  },
  {
    type: 'image',
    title: '日本大学学习环境',
    image: '/images/routes/university/pic002.jpeg',
    alt: '日本大学校园',
  },
  {
    type: 'list',
    title: '服务内容',
    items: [
      '日本大学及大学院整体升学路径规划：根据学生的学历背景、日语水平、专业兴趣与未来发展方向，制定清晰、分阶段的升学方案，避免盲目报考',
      '院校与专业精准定位：结合历年合格案例与学校招生倾向，筛选日本国公立大学、知名私立大学及优势专业，提高合格率',
      'EJU（日本留学考试）及日本大学校内考专项对策：涵盖日语、数学、综合科目或理科科目的系统辅导、真题解析与模拟考试',
      '研究计划书与志望理由书一对一辅导：从研究方向梳理、研究课题设定到日文逻辑表达进行深度修改与完善',
      '大学及大学院面试模拟训练：还原真实面试流程，强化日语表达、逻辑思维与专业问答能力，提升面试通过率',
      '出愿材料准备与升学流程全程管理支持：包括报名时间管理、材料审核、网申与邮寄指导，减少因流程问题造成的风险',
    ],
  },
]

},

work: {
  id: '03',
  image: '/images/pic003.jpeg',
  title: '社会人就职',
  desc: '特定技能、人文签证就职支持。',
  content: [
  {
    type: 'text',
    title: '服务对象',
    text: '面向希望赴日就业的社会人及日本留学毕业生，适合计划通过合法工作签证在日本长期发展的人群。无论是刚毕业的留学生，还是希望转职、转行业的海外社会人，只要具备一定日语基础与专业技能，均可通过本服务获得系统性的日本就职支持。',
  },
  {
    type: 'image',
    title: '日本职场环境',
    image: '/images/routes/work/pic003.jpeg',
    alt: '日本公司办公环境',
  },
  {
    type: 'list',
    title: '服务内容',
    items: [
      '日本工作签证类型咨询与规划：涵盖技术·人文知识·国际业务签证、特定技能签证等，结合个人背景制定可行的在留资格方案',
      '日文简历（履历书）与职务经历史书专业制作：按照日本企业招聘标准进行结构优化与日文润色，突出个人优势',
      '日本企业岗位匹配与内推推荐：根据求职者技能、日语水平与职业规划，匹配合适的日本企业及岗位',
      '日企面试辅导与实战模拟：包含自我介绍、志望动机、职业规划等高频问题训练，提高面试通过率',
      '内定后入职及在留资格变更支持：协助完成入职手续、签证申请或变更流程，确保顺利赴日或留日工作',
    ],
  },
]

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
        id: 'j001',
        title: '2024 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic001.jpeg',
        date: '2024-01-10',
        summary: '关于留学生签证与入学的新变化',
        content: [
          '2024年起，日本对留学生政策进行了部分调整。',
          '本次调整主要涉及签证审核与语言要求。',
          '建议计划赴日留学的同学尽早做好准备。',
        ],
      },
      {
        id: 'j002',
        title: '2025 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic002.jpeg',
        date: '2025-01-10',
        summary: '关于留学生签证与入学的新变化',
        content: [
          '2025年起，日本对留学生政策进行了部分调整。',
          '本次调整主要涉及签证审核与语言要求。',
          '建议计划赴日留学的同学尽早做好准备。',
        ],
      },
      {
        id: 'j003',
        title: '2026 日本留学政策更新',
        desc: '最新签证与升学政策解读。',
        image: '/images/pic003.jpeg',
        date: '2026-01-10',
        summary: '关于留学生签证与入学的新变化',
        content: [
          '2026年起，日本对留学生政策进行了部分调整。',
          '本次调整主要涉及签证审核与语言要求。',
          '建议计划赴日留学的同学尽早做好准备。',
        ],
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
      id: 'j001',
      title: '日本留学政策更新',
      desc: '最新日本留学签证与升学政策解读。',
      image: '/images/pic001.jpeg',
      date: '2024-01-10',
    summary: '关于留学生签证与入学的新变化',
    content: [
      '2024年起，日本对留学生政策进行了部分调整。',
      '本次调整主要涉及签证审核与语言要求。',
      '建议计划赴日留学的同学尽早做好准备。',
    ],
    },
  ],
  western: [
    {
      id: 'j004',
      title: '欧美高校申请趋势',
      desc: '欧美名校申请最新趋势分析。',
      image: '/images/pic002.jpeg',
      date: '2024-01-10',
    summary: '关于留学生签证与入学的新变化',
    content: [
      '2024年起，日本对留学生政策进行了部分调整。',
      '本次调整主要涉及签证审核与语言要求。',
      '建议计划赴日留学的同学尽早做好准备。',
    ],
    },
  ],
  hongkong: [
    {
      id: 'j005',
      title: '香港大学招生说明',
      desc: '香港高校最新招生政策。',
      image: '/images/pic003.jpeg',
      date: '2024-01-10',
    summary: '关于留学生签证与入学的新变化',
    content: [
      '2024年起，日本对留学生政策进行了部分调整。',
      '本次调整主要涉及签证审核与语言要求。',
      '建议计划赴日留学的同学尽早做好准备。',
    ],
    },
  ],
},

  about: {
    title: '关于我们',
    intro: '我们专注于日本及海外升学与就职规划，提供一站式国际发展服务。',

    mission: {
      title: '我们的使命',
      desc: '帮助学生和社会人士找到最适合自己的国际发展路径。',
    },

    services: {
      title: '核心服务',
      items: [
        '日本初高中升学规划',
        '大学 / 大学院申请',
        '日本就职与签证服务',
      ],
    },

    regions: {
      title: '留学与升学方向',
      list: [
        {
          key: 'japan',
          title: '🇯🇵 日本',
          desc:
            '覆盖日本初中、高中、大学、大学院及专门学校，提供从语言规划到签证申请的一站式服务。',
        },
        {
          key: 'western',
          title: '🇺🇸 🇬🇧 欧美',
          desc:
            '面向美国、英国、加拿大及欧洲国家，提供本科与研究生申请及文书指导。',
        },
        {
          key: 'hongkong',
          title: '🇭🇰 香港',
          desc:
            '针对香港高校升学路径，提供 DSE / IB / A-Level 对应升学方案。',
        },
      ],
    },

    contact: {
      title: '联系我们',
      offices: [
        {
          country: '日本 · 东京',
          address: '东京都丰州区池袋',
        },
        {
          country: '中国 · 上海',
          address: '上海市浦西（合作办公室）',
        },
        {
          country: '中国 · 香港',
          address: '香港九龙（合作办公室）',
        },
        {
          country: '澳大利亚 · 悉尼',
          address: 'Sydney, NSW（合作办公室）',
        },
      ],
      email: 'contact@example.com',
      wechat: 'StudyJapan_Official',
    },
  },

downloads: {
    title: '资料下载',
    desc: '页面流程说明、方案介绍等 PDF 文件下载。',
    categories: [
      {
        key: 'pages',
        title: '页面流程说明',
        items: [
          {
            id: 'school-detail-flow',
            title: '学校详情页页面流程说明',
            desc: '学校详情页的页面结构、用户操作流程及数据映射说明。',
            file: '/pdf/school_detail_page_flow.pdf',
          },
          {
            id: 'school-list-flow',
            title: '学校列表页页面流程说明',
            desc: '学校列表页的页面结构、筛选逻辑及交互流程说明。',
            file: '/pdf/school_detail_page_flow.pdf',
          },
        ],
      },
      {
        key: 'routes',
        title: '升学 / 就职方案说明',
        items: [
          {
            id: 'route-junior',
            title: '初高中赴日升学方案说明',
            desc: '面向初高中学生的日本升学整体流程与服务内容说明。',
            file: '/pdf/school_detail_page_flow.pdf',
          },
          {
            id: 'route-work',
            title: '日本就职与签证支持方案说明',
            desc: '社会人赴日就职路径、签证类型及服务流程说明。',
            file: '/pdf/school_detail_page_flow.pdf',
          },
        ],
      },
    ],
  },



};

export default zh;
