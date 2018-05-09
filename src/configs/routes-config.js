module.exports = [
  {
    path: "/",
    name: "首页",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      icon: "location",
      id: 1
    }
  },
  // {
  //   path: "/login",
  //   name: "登录",
  //   component: () => import("@/views/Login.vue"),
  //   meta: {
  //     icon: "news",
  //     id: 5
  //   }
  // },
  {
    path: "/guild",
    name: "公会管理",
    component: () => import("@/views/guild/index.vue"),
    redirect: "/guild/guildInfo",
    meta: {
      icon: "menu",
      id: 2
    },
    children: [
      {
        path: "/guild/guildInfo",
        name: "公会信息",
        component: () => import("@/views/guild/guildInfo.vue"),
        meta: {
          id: 21
        }
      },
      {
        path: "/guild/profitManagement",
        name: "收益管理",
        component: () => import("@/views/guild/profitManagement.vue"),
        meta: {
          id: 22
        }
      }
    ]
  },
  {
    path: "/anchor",
    name: "主播管理",
    component: () => import("@/views/anchor/index.vue"),
    redirect: "/anchor/anchorManagement",
    meta: {
      icon: "star-on",
      id: 3
    },
    children: [
      {
        path: "/anchor/anchorManagement",
        name: "开播管理",
        component: () => import("@/views/anchor/anchorManagement.vue"),
        meta: {
          id: 31
        }
      }
    ]
  }
];


