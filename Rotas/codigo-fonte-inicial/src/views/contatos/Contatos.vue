<template>
    
    <div>
        <contatos-lista></contatos-lista>
        <router-view></router-view>
        <router-view name="contato-detalhes"></router-view>
    </div>
    
</template>

<script>

import ContatosLista from './../../components/contatos/ContatosLista.vue'

export default {
    components:{
        ContatosLista
    }
}
</script>