import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
// 引入animate.css 样式
import "animate.css";

const store = createPinia();

createApp(App).use(store).mount("#app");
