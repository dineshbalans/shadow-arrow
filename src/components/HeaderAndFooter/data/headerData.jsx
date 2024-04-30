export const menuBarData = [
  {
    id: "mbd_1",
    URL: "/",
    text: "Home",
    subMenu: null,
  },
  {
    id: "mbd_2",
    URL: "/about",
    text: "About",
    subMenu: null,
  },
  {
    id: "mbd_3",
    URL: null,
    text: "Services",
    subMenu: [
      {
        id: "ssbm_1",
        URL: "/services",
        text: "Our Services",
        subMenu: null,
      },
      {
        id: "ssbm_2",
        URL: null,
        text: "Service List",
        subMenu: [
          {
            id: "ssbmsbm_1",
            URL: "/web-design-and-development",
            text: "Web Design",
            subMenu: null,
          },
          {
            id: "ssbmsbm_2",
            URL: "/services/ui-ux",
            text: "UI / UX",
            subMenu: null,
          },
        ],
      },
    ],
  },
  {
    id: "mbd_4",
    // "/pages"
    URL: null,
    text: "Pages",
    subMenu: [
      // Team, Portfolio, FAQ
      {
        id: "sm_1",
        URL: "/team",
        text: "Team",
        subMenu: null,
      },
      {
        id: "sm_2",
        URL: "/portfolio",
        text: "Portfolio",
        subMenu: null,
      },
    ],
  },
  {
    id: "mbd_5",
    URL: "/blog",
    text: "Blog",
    subMenu: null,
  },
  {
    id: "mbd_6",
    URL: "/contact",
    text: "Contact Us",
    subMenu: null,
  },
];
