<template>
  <div id="app">
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.</p>
      </div>
    </div>

    <div class="container">

      <TarefasLista />

      <button 
        class="btn btn-primary mt-4 mb-2"
        @click="download">
          Baixar Imagem
      </button>

      <div class="progress"> 
        <div 
          class="progress-bar"
          role="progressbar"
          :style="{ width: progresso + '%' }"
          :aria-valuenow="progresso"
          aria-valuemin="0"
          aria-valuemax="100">
            {{ progresso }} %
        </div>
      </div>

      <div v-if="imagem">
        <img :src="imagem" style="max-width: 100%">
      </div>

    </div>

  </div>
</template>

<script>

import axios from 'axios'
import config from './config/config'

import TarefasLista from './components/TarefasLista.vue'

export default {
  /* eslint-disable */
    components: {
        TarefasLista
    },
    data(){
      return{
        progresso:0,
        imagem: undefined
      }
    },
    async created() {

      const tarefa5 = await axios.get(`${config.apiURL}/tarefas/5`)
      const tarefa6 = await axios.get(`${config.apiURL}/tarefas/6`)

      console.log(tarefa5)
      console.log(tarefa6)

    },
    methods:{
      download(){
        axios.get('https://sportbuzz.uol.com.br/media/_versions/design_sem_nome_5_sOUebpa_widelg.png',
        {
          responseType: 'blob',
          onDownloadProgress: (ProgressEvent) => {
            this.progresso = (ProgressEvent.loaded / ProgressEvent.total * 100).toFixed(0)
          }
        }).then(response =>{
          const reader = new window.FileReader()
          reader.readAsDataURL(response.data)
          reader.onload = () =>{
            this.imagem = reader.result
          }
        })
      }
    }
}
</script>