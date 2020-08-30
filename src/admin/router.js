import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from "./pages/about";
import login from "./pages/login";
import works from "./pages/works";
import header from "./components/header";


const routes = [
  {
    path: "/",
    components: {
      default: about,
      header: header
    }
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/works",
    components: {
      default: works,
      header: header
    }
  }
];

export default new VueRouter({ routes }); 