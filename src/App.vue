<template>
  <div>
    <h1>{{ titulo }}</h1>

    <!-- Não podemos usar interpolação em atributos! 
    Precisamos fazer de outra maneira, aliás essa maneira possui duas formas. 
    A primeira é usarmos v-bind:
    <img v-bind:src="foto.url" v-bind:alt=foto.titulo>

    podemos trocar v-bind pelo seu atalho dois pontos: -->
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt=foto.titulo>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
      
  },
}
</script>

<style>

</style>
