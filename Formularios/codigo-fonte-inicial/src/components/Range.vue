<template>
    <div>
        <label>{{ CustomLabel }}</label>
        <input type="range"
            v-bind="$attrs"
            :value="value"
            :class="inputClass"
            @input="atualizar"
        >
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    data(){
        return{
            valorAtual : this.value || this.$attrs.min
        }
    },
    computed:{
        CustomLabel(){
            return `${ this.label } (R$ ${ this.valorAtual }) `
        }
    },
    methods:{
        atualizar(event){
            const valor = event.target.value
            this.$emit('input', valor)
            this.valorAtual = valor
        }
    },
    props:{
        label: String,
        value:[Number, String],
        inputClass :[String, Object, Array]
    }
}
</script>