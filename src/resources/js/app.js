require("./bootstrap");

window.Vue = require("vue");

Vue.component(
    "main-component",
    require("./components/MainComponent.vue").default
);

const app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!",
    },
});
