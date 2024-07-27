import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; 
import ConteudoPrincipal from '@/components/ConteudoPrincipal.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', 
    name: 'ConteudoPrincipal',
    component: ConteudoPrincipal,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;