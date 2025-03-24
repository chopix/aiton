import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CabinetTradingView from '@/views/CabinetTradingView.vue'
import CabinetMoreView from '@/views/CabinetMoreView.vue'
import CabinetAffilateView from '@/views/CabinetAffilateView.vue'
import CabinetHistoryView from '@/views/CabinetHistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cabinet/trading',
      name: 'cabinetTrading',
      component: CabinetTradingView
    },
    {
      path: '/cabinet/more',
      name: 'cabinetMore',
      component: CabinetMoreView
    },
    {
      path: '/cabinet/affilate',
      name: 'cabinetAffilate',
      component: CabinetAffilateView
    },
    {
      path: '/cabinet/history',
      name: 'cabinetHistory',
      component: CabinetHistoryView
    },
  ],
})

export default router
