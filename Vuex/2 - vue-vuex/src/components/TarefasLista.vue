<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right mb-1" 
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>
        
        <h3 class="font-weight-light mb-4">A Fazer ({{ $store.getters.tarefasAFazer.length }})</h3>

        <ul class="list-group" v-if="$store.getters.tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in $store.getters.tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <h3 class="font-weight-light mt-4">Concluídas ({{ $store.getters.totalTarefasConcluidas }})</h3>

        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa foi concluida.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />


    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'


import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
    /* eslint-disable */
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    created(){
        this.$store.dispatch('listarTarefas', {
            tarefas: [
                { id: 1, titulo: 'Aprender Vue', concluido: true },
                { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                { id: 3, titulo: 'Aprender Vuex', concluido: false }
            ]
        })
    },
    computed:{
        ...mapState('tarefas', ['tarefas']),
        ...mapGetters('tarefas', ['tarefasConcluidas', 'tarefasAFazer', 'totalTarefasConcluidas']),
        tarefasConcluidas(){
            return this.$store.getters.tarefasConcluidas
        }
    },
    data() {
        return {
            exibirFormulario: false,
            tarefaSelecionada: undefined,
        }
    },
    methods: {
        ...mapActions('tarefas', ['listarTarefas']),
        exibirFormularioCriarTarefa(event) {
            if (this.tarefaSelecionada) {
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.tarefaSelecionada = tarefa
        },
        resetar() {
            this.exibirFormulario = false
            this.tarefaSelecionada = undefined
        }
    }
}
</script>
