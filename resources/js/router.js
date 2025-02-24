// resources/js/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/frontend/HomeComponent.vue';
import AboutComponent from './components/frontend/AboutComponent.vue';
import ContactComponent from './components/frontend/ContactComponent.vue';
import DoctorsComponent from './components/frontend/DoctorsComponent.vue';
import NewsComponent from './components/frontend/NewsComponent.vue';

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
  {
    path: '/doctors',
    name: 'doctors',
    component: DoctorsComponent,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
