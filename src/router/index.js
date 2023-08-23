import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/community",
    name: "community",
    component: () =>
      import(/* webpackChunkName: "community" */ "../views/CommunityView.vue"),
    redirect: "/community/list/1",
    children: [
      {
        path: "list",
        name: "boardList",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/community/CommunityList.vue"
          ),
      },
      {
        path: "list/:currentPage",
        name: "boardListPage",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/community/CommunityList.vue"
          ),
      },
      {
        path: "view/:boardId",
        name: "boardview",
        component: () =>
          import(
            /* webpackChunkName: "board" */ "@/components/community/CommunityDetail"
          ),
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () =>
      import(/* webpackChunkName: "community" */ "../views/UserView.vue"),
    redirect: "/auth/login",
    children: [
      {
        path: "login",
        name: "userLogin",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/user/UserLogin.vue"
          ),
      },
      {
        path: "join",
        name: "userJoin",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/user/UserJoin.vue"
          ),
      },
      {
        path: "information",
        name: "userInformation",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/user/UserInformation.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
