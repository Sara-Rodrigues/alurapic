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
      fotos: [
        {
          url: 'https://t2.ea.ltmcdn.com/pt/images/1/7/4/nomes_para_gatos_masculinos_cinza_22471_1_600.jpg',
          titulo: 'Gato Cinza'
        },
        {
          url: 'https://t2.ea.ltmcdn.com/pt/images/1/7/4/nomes_para_gatos_masculinos_cinza_22471_1_600.jpg',
          titulo: 'Gatinho'
        }]
    }
    
  }
}
</script>

<style>

</style>
