import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
//import Header from '@/components/Header'
import YayinEvleriPage from '@/components/YayinEvleriPage'
import ProductDetailPage from '@/components/ProductDetailPage'
import KampanyalarPage from '@/components/KampanyalarPage'
import IletisimPage from '@/components/IletisimPage'
import Deneme from '@/components/Deneme'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/ProductDetailPage',
            name: 'ProductDetailPage',
            component: ProductDetailPage
        },
        {
            path: '/YayinEvleri',
            name: 'YayinEvleri',
            component: YayinEvleriPage
        },
        {
            path: '/KampanyalarPage',
            name: 'KampanyalarPage',
            component: KampanyalarPage
        },
        {
            path: '/IletisimPage',
            name: 'IletisimPage',
            component: IletisimPage
        },
        {
            path: '/Deneme',
            name: 'Deneme',
            component: Deneme
        }
    ]
})