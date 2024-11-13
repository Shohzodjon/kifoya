import "./assets/scss/main.scss";
import './assets/icons/style.css'
import { createApp } from "vue";
import { createPinia } from "pinia";
import $i18n from "@/plugins/i18n";
import Antd from "ant-design-vue";
import Vue3Marquee from 'vue3-marquee'
import "ant-design-vue/dist/reset.css";
import './assets/fonts/style.css'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import App from "./App.vue";
import router from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css';
const app = createApp(App);
app.use(Antd);
AOS.init();
app.use(Vue3Marquee);
app.use($i18n);
app.use(VueTelInput);
app.use(createPinia());
app.use(router);
app.mount("#app");
