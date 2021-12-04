
const routes = [
  {
    path: '/category',
    component: () => import('layouts/CategoryLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Categories.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '', component: () => import('pages/Index.vue') }    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
