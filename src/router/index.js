import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
//import Header from '@/components/Header'
import YayinEvleriPage from '@/components/YayinEvleriPage'
import ProductDetailPage from '@/components/ProductDetailPage'
import KampanyalarPage from '@/components/KampanyalarPage'
import IletisimPage from '@/components/IletisimPage'
import CocukPage from '@/components/CocukPage'
import AccordionHakkimizda from '@/components/AccordionHakkimizda'
import LoginPage from '@/components/LoginPage'
import VModalSearch from '@/components/VModalSearch'
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

            path: '/CocukPage',
            name: 'CocukPage',
            component: CocukPage

        },
        {

            path: '/AccordionHakkimizda',
            name: 'AccordionHakkimizda',
            component: AccordionHakkimizda

        },
        {

            path: '/LoginPage',
            name: 'LoginPage',
            component: LoginPage

        },
        {
            path: '/VModalSearch',
            name: 'VModalSearch',
            component: VModalSearch
            
        }
       
        
    ]
})