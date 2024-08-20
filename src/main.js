import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Style Tools
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./scss/main.scss";
import "normalize.css";
// import filters from "./filters";

const app = createApp(App);
app.config.globalProperties.filters = {
    currencyUSD(value) {
        return "$" + value;
    },
};
app.directive("bold", {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + "px";
    },
});
// app.directive("bold", {
//     binding: function (el) {
//         el.style.fontWeight = "bold";
//     },
// });
// Vue.filter("uppercase", function (v) {
//     return v.toUpperCase();
// });

createApp(App).use(store).use(router).mount("#app");
