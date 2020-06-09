const state ={
    tarefas: []
}

const getters = {
    tarefasConcluidas:(state) =>{
        return state.tarefas.filter(t => t.concluido)
    },
    tarefasAFazer: (state) =>{
        return state.tarefas.filter(t => !t.concluido)
    },
    totalTarefasConcluidas: (state, getters) => {
        return getters.tarefasConcluidas.length
    }
}

const actions = {
    listarTarefas:(context, payload) =>{
        setTimeout(() => {
            context.commit('listarTarefas', payload)
        }, 2000);            
    }
}

const mutations = {
    listarTarefas: (state, payload) =>{
        state.tarefas = payload.tarefas
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}