import Vue from 'vue'
import App from './App.vue'

// importando o módulo
import VueResource from 'vue-resource';

// importando o router!
import VueRouter from 'vue-router';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
