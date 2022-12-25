import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage';
import CartPage from '@/pages/CartPage';
import FavouritePage from '@/pages/FavouritePage';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
  {
    path: '/favourite',
    component: FavouritePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
