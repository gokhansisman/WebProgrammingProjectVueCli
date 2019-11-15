import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Header from '@/components/Header'
import YayinEvleriPage from '@/components/YayinEvleriPage'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'MainPage',
            component:MainPage
        },
        {
            path:'/ProductPage',
            name:'ProductPage',
            component:Header
        },{
        path:'/YayinEvleri',
        name:'YayinEvleri',
        component:YayinEvleriPage
    }
        ]
})