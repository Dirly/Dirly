import { createRouter, createWebHistory } from 'vue-router'
import AgainstGreatDarkness from '../data/AgainstGreatDarkness.json'
import SectorCritical from '../data/SectorCritical.json'
import iPrep from '../data/iPrep.json'
import AmazingAp from '../data/AmazingAp.json'
import FlightCheck from '../data/FlightCheck.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode : 'hash',
  routes: [
    {
      path: '/',
      redirect: to => {
        return { path: '/about'}
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortView.vue')
    },
    {
      path: '/portfolio/AgainstGreatDarkness',
      name: 'AgainstGreatDarkness',
      component: () => import('../views/GameView.vue'),
      props: AgainstGreatDarkness
    },
    {
      path: '/portfolio/SectorCritical',
      name: 'SectorCritical',
      component: () => import('../views/GameView.vue'),
      props: SectorCritical
    },
    {
      path: '/portfolio/AmazingApp',
      name: 'AmazingApp',
      component: () => import('../views/GameView.vue'),
      props: AmazingAp
    },
    {
      path: '/portfolio/iPrep',
      name: 'iPrep',
      component: () => import('../views/GameView.vue'),
      props: iPrep
    },
    {
      path: '/portfolio/FlightCheck',
      name: 'FlightCheck',
      component: () => import('../views/GameView.vue'),
      props: FlightCheck
    }
  ]
})

export default router
