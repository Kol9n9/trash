import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Home2Page from "../views/Home2Page.vue";
import AboutPage from "../views/AboutPage.vue";
import TestPage from "../views/TestPage.vue";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'Home2',
        path: '/home2',
        component: Home2Page
    },
    {
        name: 'About',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'Test',
        path: '/test',
        component: TestPage
    }
];


export default createRouter({
    history: createWebHistory(),
    routes: routes
})