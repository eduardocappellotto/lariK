import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', name: 'loginDefault', component: () => import('pages/LoginPage.vue') },
    { path: 'login', name: 'login', component: () => import('pages/LoginPage.vue') },
    { path: 'register', name: 'register', component: () => import('pages/RegisterPage.vue') },
    { path: 'email-confirmation', name: 'email-confirmation', component: () => import('pages/EmailConfirmation.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'me', name: 'me', component: () => import('pages/Me.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
