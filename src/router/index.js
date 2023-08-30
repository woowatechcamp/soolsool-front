import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import OrderView from "../views/OrderView.vue";
import PayView from "../views/PayView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/liquor",
    name: "liquor",
    component: () =>
      import(/* webpackChunkName: "community" */ "../views/CommunityView.vue"),
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
      },{
        path: "view/:hotPlaceId",
        name: "LiquorDetail",
        component: () =>
          import(
            /* webpackChunkName: "board" */ "@/components/community/LiquorDetail"
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

  {
    path: "/cart",
    name: "cart",
    component: CartView,
    children: [
      {
        path: "list",
        name: "CartList",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/cart/CartList.vue"
          ),
      },]
  },

  {
    path: "/order",
    name: "order",
    component: OrderView,
    children: [
      {
        path: "ready/:receiptId",
        name: "OrderReady",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/order/OrderReady.vue"
          ),

      },
      {
        path: "complete/:orderId",
        name: "OrderComplete",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/order/OrderComplete.vue"
          ),
      },
    
{
        path: "detail/:orderId",
        name: "OrderDetail",
        component: () =>

          import(
            /* webpackChunkName: "community" */ "@/components/order/OrderDetail"
          ),
      },
      {
        path: "list",
        name: "OrderList",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/order/OrderList"
          ),
      },
    ],
    
  },
  {
    path: "/pay",
    name: "pay",
    component: PayView,
    children: [
      {
        path: "success/:receiptId",
        name: "paySuccess",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "@/components/pay/paySuccess.vue"
          ),
        }
      ]

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
