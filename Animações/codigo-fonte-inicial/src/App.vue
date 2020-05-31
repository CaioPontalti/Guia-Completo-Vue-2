<template>
  <div id="app" >

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container-fluid">

      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button>
      
      <transition name="fade">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>

      <transition name="zoom">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>

      <transition name="slide" appear>
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      mostrar:false
    }
  }
}
</script>

<style scoped>

.fade-enter , .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active{
  transition: 1s;
}


.zoom-enter , .zoom-leave-to {
  transform: scale(0);
}

.zoom-enter-active, .zoom-leave-active{
  transition: transform 0.5s;
}


.slide-enter-active{
  animation: slide-in 0.7s;
}

.slide-leave-active{
  animation: slide-out 0.7s;
}

@keyframes slide-in{
	from {transform: translateY(40px);}
	to { transform: translateY(0);}
}

@keyframes slide-out{
	from {transform: translateY(0);}
	to { transform: translateY(40px);}
}


</style>