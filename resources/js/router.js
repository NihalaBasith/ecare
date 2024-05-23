// resources/js/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/frontend/HomeComponent.vue';
import AboutComponent from './components/frontend/AboutComponent.vue';
import ContactComponent from './components/frontend/ContactComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComponent,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
