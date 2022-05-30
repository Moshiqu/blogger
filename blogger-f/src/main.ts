import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "@/assets/css/reset.css";
import "@/assets/css/global.css";
// 引入animate.css 样式
import "animate.css";
// 引入路由
import router from './router'

const store = createPinia();

createApp(App).use(router).use(store).mount("#app");
