<template>
    <div>
        <h3 class="font-weight-light">Detalhes do contato id: {{ id }}</h3>
        <router-link :to="`/contatos/${id}/editar`" class="btn btn-primary">Editar</router-link>
    </div>
    
</template>

<script>
export default {
    /* eslint-disable */
    data(){
        return{
            id:this.$route.params.id        
        }
    },
    // watch:{
    //     '$route'(to, from){
    //         this.id = to.params.id
    //     }
    // },
    beforeRouteUpdate(to, from, next){
        this.id = to.params.id
        next()
    },
    created(){
        this.$route.params.id
    }
}
</script>