import { createRouter, VueRouter } from "vue-router";

const routes = [
    {
        path: '/', component: home
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router