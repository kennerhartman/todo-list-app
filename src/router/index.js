import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomePage.vue'
import NotFound from '@/views/NotFound.vue'
import List from '@/views/ListView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/home', redirect: '/' },
        { path: '/lists', name: 'List', component: List },
        { path: '/:catchall(.*)*', name: 'NotFound', component: NotFound }
    ],
})

export default router