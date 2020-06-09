/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/store/modules/contador'
import tarefas from '@/store/modules/tarefas'

Vue.use(Vuex)

const modules ={
    contador,
    tarefas
}

export default new Vuex.Store({
    modules
})