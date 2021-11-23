import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import Event from '../views/Event.vue'
import EventCreate from '../views/EventCreate.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'event',
    component: Event,
    props: true,
  },
  {
    path: '/event/event-create',
    name: 'event-create',
    component: EventCreate,
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
