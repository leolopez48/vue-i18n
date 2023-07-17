import "./style.css";

import { createApp } from "vue";

import router from "./routes/index";
import App from "./App.vue";
import { i18n } from "@/lang/i18n";

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount("#app");

