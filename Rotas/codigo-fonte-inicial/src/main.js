import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import Home from './views/home/Home.vue'


Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes:[
    {path:'/', component: Home},
    {path:'/contatos', component: Contatos},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
