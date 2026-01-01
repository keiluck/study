export interface RouteItem {
  image: string;
  title: string;
  desc: string;
}

export interface Dictionary {
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

  news: {
    title: string;
    list: {
      title: string;
      desc: string;
      image: string;
    }[];
  };
}
