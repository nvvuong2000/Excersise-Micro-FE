import { pinia } from "@/bootstrap";
import { createPinia } from "pinia";
import { createApp } from "vue";
import Checkout from "./Checkout.vue";

export default (el: any, props: any) => {
  createApp(Checkout, props).use(pinia).mount(el);
};
