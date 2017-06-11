import Vue from 'vue'
import Router from 'vue-router'
import part from '@/components/part'
import hotcity from '@/components/hotCity'
import ershou from '@/components/ershou'
import IndexPublic from '@/components/public/Index'
import home from '@/components/home'
import sell from '@/components/sell'
import see from '@/components/see'
import detail from '@/components/detail'
import chat from '@/components/chat'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/search',
      component: IndexPublic,
      children:
      [
        {
          path: '/search/aa',
          component: search,
        },
        {
          path: '/search/bb',
          component: detail,
        },
      ]
    },
    {
      path: '/part',
      name: 'part',
      component: part
    },
    {
      path: '/hot',
      name: 'hot',
      component: hotcity
    },
    {
      path: '/ershou',
      component: IndexPublic,
      children: [{
        path: '/ershou/aa',
        component: ershou
      }]
    },
    {
      path: '/sell',
      component: IndexPublic,
      children: [{
        path: '/sell/aa',
        component: sell
      }]
    },
    {
      path: '/see',
      component: IndexPublic,
      children: [{
        path: '/see/aa',
        component: see
      }]
    },
    {
      path: '/detail',
      component: IndexPublic,
      children:
      [
        {
        path: '/detail/aa',
        component: detail,
        },
        {
        path: '/detail/bb',
        component: chat,
        }
      ]
    }
  ]
})
