<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>

        <ul class="list-group" v-if="contatos.length > 0">
            <contatos-lista-item class="list-group-item"
                v-for="contato in contatos" :key="contato.id"
                :contato="contato">
            </contatos-lista-item>
        </ul>

        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>

import ContatosListaItem from './ContatosListaItem.vue'

export default {
    components:{
        ContatosListaItem
    },
    data(){
        return{
            contatos:[
                {id:1, nome: 'Caio', email:'caio@caio.com'},
                {id:2, nome: 'José', email:'jose@jose.com'},
                {id:3, nome: 'Maria', email:'maria@maria.com'}
            ]
        }
    },
    methods:{
        voltar(){
            this.$router.back()
        }
    }
}
</script>