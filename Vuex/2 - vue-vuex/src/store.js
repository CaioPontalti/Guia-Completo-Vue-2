import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 0,
        tarefas: []
    },
    getters:{
        tarefasConcluidas:(state) =>{
            return state.tarefas.filter(t => t.concluido)
        },
        tarefasAFazer: (state) =>{
            return state.tarefas.filter(t => !t.concluido)
        },
        totalTarefasConcluidas: (state, getters) => {
            return getters.tarefasConcluidas.length
        }
    },
    mutations:{
        listarTarefas: (state, payload) =>{
            state.tarefas = payload.tarefas
        }
    },
    actions:{
        listarTarefas:(context, payload) =>{
            setTimeout(() => {
                context.commit('listarTarefas', payload)
            }, 2000);            
        }
    }
})