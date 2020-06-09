/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contadorModule ={
    namespaced: true,
    contador: 0
}

const tarefasModule ={
    namespaced: true,
    state: {
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
}

const store = new Vuex.Store({
    modules:{
        contador: contadorModule,
        tarefas: tarefasModule
    }
})

export default store