// export interface RouteItem {
//   image: string;
//   title: string;
//   desc: string;
// }

// export interface Dictionary {
//   common: {
//     menu: string;
//     viewRoute: string;
//   };

//   nav: {
//     home: string;
//     routes: string;
//     schools: string;
//     news: string;
//     about: string;
//   };

//   home: {
//     title: string;
//     subtitle: string;
//     desc: string;
//   };

//   routes: {
//     junior: RouteItem;
//     university: RouteItem;
//     work: RouteItem;
//   };

//   schools: {
//     title: string;
//     tabs: {
//       japan: string;
//       western: string;
//       hongkong: string;
//     };
//     japan: {
//       title: string;
//       desc: string;
//     };
//     western: {
//       title: string;
//       desc: string;
//     };
//     hongkong: {
//       title: string;
//       desc: string;
//     };
//   };

//   news: {
//     title: string;
//     list: {
//       title: string;
//       desc: string;
//       image: string;
//     }[];
//   };
// }

export interface NewsItem {
  title: string;
  desc: string;
  image: string;
}

/* ✅ 新增：新闻页结构 */
export interface NewsPage {
  title: string;
  tabs: {
    japan: string;
    western: string;
    hongkong: string;
  };
  japan: NewsItem[];
  western: NewsItem[];
  hongkong: NewsItem[];
}

export interface BaseSection {
  title?: string;
}

export interface TextSection extends BaseSection {
  type: 'text';
  text: string;
}

export interface ImageSection extends BaseSection {
  type: 'image';
  image: string;
  alt?: string;
}

export interface ListSection extends BaseSection {
  type: 'list';
  items: string[];
}
export type RouteSection =
  | TextSection
  | ImageSection
  | ListSection;
/* =======================
   About
======================= */

export interface AboutPage {
  title: string;
  intro: string;
  mission: string;
  services: string[];
}

export interface RouteItem {
  id:string;
  image: string;
  title: string;
  desc: string;
  content: RouteSection[];
}

export interface RoutesPage {
  title: string;
  items: RouteItem[];
}

/* =======================
   Schools
======================= */

export interface SchoolCategory {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export interface SchoolsPage {
  title: string;
  categories: SchoolCategory[];
}

export interface SchoolItem {
  id: string;          // 用于 /schools/[id]
  region: 'japan' | 'western' | 'hongkong';
  name: string;
  desc: string;
  image: string;
}


export interface Dictionary {
  /* ===== 原有不动 ===== */

  common: {
    menu: string;
    viewRoute: string;
  };

  nav: {
    home: string;
    routes: string;
    schools: string;
    news: string;
    about: string;
  };

  home: {
    title: string;
    subtitle: string;
    desc: string;
  };



  routes: {
    junior: RouteItem;
    university: RouteItem;
    work: RouteItem;
  };

  schools: {
    title: string;
    tabs: {
      japan: string;
      western: string;
      hongkong: string;
    };
    japan: {
      title: string;
      desc: string;
    };
    western: {
      title: string;
      desc: string;
    };
    hongkong: {
      title: string;
      desc: string;
    };
  };

  schoolsList: {
    japan: SchoolItem[];
    western: SchoolItem[];
    hongkong: SchoolItem[];
  };

  /* ✅ 首页 news（完全不动） */
  news: {
    title: string;
    list: NewsItem[];
  };

  /* ✅ 新增：新闻页面 */
  newsPage: NewsPage;

  /* ✅ 新增：关于我们 */
  about: {
    title: string;
    intro: string;
    mission: string;
    services: string[];
  };
}

