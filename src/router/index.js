import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import UserView from '@/views/user/UserView.vue'
import PhotoView from '@/views/photos/PhotoView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'User',
      component: UserView
    },
    {
      path: '/photo',
      name: 'Photo',
      component: PhotoView
    },
    {
      path: '/allimgs',
      name: 'AllImages',
      component: () => import('@/views/photos/pages/allImgs/AllImgs.vue')
    },
    {
      path: '/addimg',
      name: 'AddImage',
      component: () => import('@/views/photos/pages/addImg/AddImg.vue')
    }
  ]
})

export default router
