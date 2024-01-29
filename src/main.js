import { createPinia } from "pinia";
import "./assets/main.css";
Vue.config.devtools = true;
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
