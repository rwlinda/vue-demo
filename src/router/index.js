import Vue from "vue";
import Router from "vue-router";
//components
import Insurances from "../components/insurances";
import Form from "../components/form";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Inschrijven",
      name: "form",
      component: Form
    },
    {
      path: "",
      name: "insurances",
      component: Insurances
    }
  ]
});
