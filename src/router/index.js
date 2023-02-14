import { createRouter, createWebHistory } from "vue-router";
import home from '@/views/home/index.vue'

const routes = [
    {
        path: '/', 
        name: 'home',
        component: home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router