/** @format */
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import store, { key } from "./store";
// import router from "./router/index";

createApp(App).use(store, key).mount("#app");
