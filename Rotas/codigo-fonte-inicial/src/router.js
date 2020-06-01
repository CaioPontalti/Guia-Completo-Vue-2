import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/Home.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhe from './views/contatos/ContatoDetalhe.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'


Vue.use(Router)

export default new Router({
    mode:'history',
    linkActiveClass: 'active',
    routes:[
      {path:'/', component: Home},
      {path:'/contatos', component: Contatos, 
        children:[
          {path: ':id', component: ContatoDetalhe},
          {path: ':id/editar', 
              components: {
                  default: ContatoEditar, 
                  'contato-detalhes' :'ContatoDetalhes' 
              }
          },
          {path: '', component: ContatosHome}
        ]
      }
    ]
  })