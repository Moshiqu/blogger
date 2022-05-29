import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "@/assets/css/reset.css";
import "@/assets/css/global.css";
// 引入animate.css 样式
import "animate.css";

const store = createPinia();

createApp(App).use(store).mount("#app");
