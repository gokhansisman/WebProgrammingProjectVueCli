import Vue from 'vue'
import Router from 'vue-router'
//import MainPage from '@/components/MainPage'
//import Header from '@/components/Header'
//import YayinEvleriPage from '@/components/YayinEvleriPage'
//import ProductDetailPage from '@/components/ProductDetailPage'
//import KampanyalarPage from '@/components/KampanyalarPage'
//import IletisimPage from '@/components/IletisimPage'
//import CocukPage from '@/components/CocukPage'
//import AccordionHakkimizda from '@/components/AccordionHakkimizda'
//import LoginPage from '@/components/LoginPage'
//import VModalSearch from '@/components/VModalSearch'
Vue.use(Router)

function lazyLoad(view) {
    return () => import(`@/components/${view}.vue`)
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: lazyLoad('MainPage')
        },
        {
            path: '/ProductDetailPage',
            name: 'ProductDetailPage',
            component: lazyLoad('ProductDetailPage')
        },
        {
            path: '/YayinEvleri',
            name: 'YayinEvleri',
            component: lazyLoad('YayinEvleriPage')
        },
        {
            path: '/KampanyalarPage',
            name: 'KampanyalarPage',
            component: lazyLoad('KampanyalarPage')
        },
        {
            path: '/IletisimPage',
            name: 'IletisimPage',
            component: lazyLoad('IletisimPage')
        },
        {

            path: '/CocukPage',
            name: 'CocukPage',
            component: lazyLoad('CocukPage')

        },
        {

            path: '/AccordionHakkimizda',
            name: 'AccordionHakkimizda',
            component: lazyLoad('AccordionHakkimizda')

        },
        {

            path: '/LoginPage',
            name: 'LoginPage',
            component: lazyLoad('LoginPage')

        },
        {

            path: '/VueLoading',
            name: 'VueLoading',
            component: lazyLoad('VueLoading')

        },
        {

            path: '/YeniCikanlarPage',
            name: 'YeniCikanlarPage',
            component: lazyLoad('YeniCikanlarPage')

        },
        {

            path: '/Book',
            name: 'Book',
            component: lazyLoad('Book')

        },
        


    ]
})