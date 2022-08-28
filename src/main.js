import { createApp } from "vue";
import VueMask from '@devindex/vue-mask';
import App from "./App.vue";
import router from "./router";
import Vuelidate from "@vuelidate/core";
import "./index.css";

createApp(App).use(router).mount("#app").use(Vuelidate).use(VueMask);
