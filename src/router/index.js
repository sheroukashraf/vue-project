import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuteView from "../views/QuteView.vue";
import BlogView from "../views/BlogView.vue";
import VideoView from "../views/VideoView.vue";
import JoinUsView from "../views/JoinUsView.vue";
import JournalView from "../views/JournalView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
    {
        path: "/blog",
        name: "blog",
        component: BlogView,
    },
    {
        path: "/video",
        name: "video",
        component: VideoView,
    },
    {
        path: "/qute",
        name: "qute",
        component: QuteView,
    },
    {
        path: "/join",
        name: "join",
        component: JoinUsView,
    },
    {
        path: "/journal",
        name: "journal",
        component: JournalView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
