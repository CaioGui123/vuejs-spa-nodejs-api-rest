import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: false },
  },
  // Auth
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: { requiresAuth: false },
  },
  // Students
  {
    path: '/students',
    name: 'admin-students-index',
    component: () => import('../views/students/Index.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/students/create',
    name: 'admin-students-create',
    component: () => import('../views/students/Create.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/students/:id/edit',
    name: 'admin-students-edit',
    component: () => import('../views/students/Edit.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/students/:id',
    name: 'admin-students-show',
    component: () => import('../views/students/Show.vue'),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    // console.log(`Passou para ${to.path}`);
    next();
    return;
  }

  if (store.state.auth.token) {
    // console.log(`Passou para ${to.path}`);
    next();
    return;
  }

  // console.log(`Não passou para ${to.path}`);
  next({ name: 'login' });
});

export default router;
