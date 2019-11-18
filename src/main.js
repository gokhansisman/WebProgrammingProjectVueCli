import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import { AccordionMenu } from 'vue-accordion-menu'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.component('AccordionMenu', AccordionMenu)
Vue.config.productionTip = false


Vue.use(VModal)

new Vue({
  render: h => h(App),router,VModal
}).$mount('#app')

