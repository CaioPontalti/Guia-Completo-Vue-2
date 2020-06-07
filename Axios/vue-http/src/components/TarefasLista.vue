<template>
    <div>
        
        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-primary float-right" 
                    @click="exibirFormularioCriarTarefa">
                    <i class="fa fa-plus mr-2"></i>
                    <span>Criar</span>
                </button>
            </div>
        </div>
        

        <ul class="list-group" v-if="tarefasOrdenadas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasOrdenadas"
                :key="tarefa.id"
                :tarefa="tarefa" 
                @editar="selecionarTarefaEditar"
                @deletar="deletarTarefa"
                @editarStatus="editarTarefa"/>
        </ul>

        <p v-else-if="!mensagemErro">Nenhuma tarefa criada.</p>

        <p v-else class="alert alert-danger">{{ mensagemErro }}</p>

        <TarefaSalvar 
            v-if="exibirForm"
            :tarefa="tarefaSelecionada"
            @criar="criarTarefa"
            @editar="editarTarefa"
        />

    </div>
</template>

<script>

import axios from '../axios'

import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
    /* eslint-disable */
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            tarefas: [],
            exibirForm:false,
            tarefaSelecionada: undefined,
            mensagemErro:undefined
        }
    },
    created(){
        axios.get(`/tarefas`).then((response) =>{
            this.tarefas = response.data;
        }, error=>{
            return Promise.reject(error)
        }).catch(error =>{
            if (error.response) {
                this.mensagemErro = `Servidor retornou um erro: ${error.message} ${error.response.statusText}`
            } else if(error.request){
                this.mensagemErro = `Erro ao tentar se comunicar com o servidor. Erro ${error.message}`
            } else{
                this.mensagemErro = `Erro ao tentar fazer a requisição ao servidor. Erro: ${error.message}`
            }
        })
    },
    computed:{
        tarefasOrdenadas(){
            return this.tarefas.slice().sort((tarefa1, tarefa2) =>{
                return tarefa1.concluido - tarefa2.concluido
            })
        }
    },
    methods:{
        criarTarefa(tarefa){
            axios.post(`/tarefas`, tarefa).then(( response) =>{
                this.tarefas.push(response.data)
                this.resetar()
            })
        },
        editarTarefa(tarefa){
            console.log(tarefa);
            axios.put(`/tarefas/${tarefa.id}`, tarefa).then( response =>{
                const indice = this.tarefas.findIndex(t => t.id === tarefa.id)
                this.tarefas.splice(indice, 1, response.data)
                this.resetar()
            })
        },
        deletarTarefa(tarefa){
            axios.delete(`/tarefas/${tarefa.id}`).then(response =>{
                const indice = this.tarefas.findIndex(t => t.id === tarefa.id)
                this.tarefas.splice(indice, 1)
                this.resetar()
            })
        },
        exibirFormularioCriarTarefa(e){
            if (this.tarefaSelecionada) {
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirForm = !this.exibirForm
        },
        selecionarTarefaEditar(tarefa){
            this.tarefaSelecionada = tarefa
            this.exibirForm = true
        },
        resetar(){
            this.tarefaSelecionada = undefined
            this.exibirForm = false
        }
    }
}
</script>
