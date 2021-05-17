import Vue from 'vue'
import App from './App.vue'

// importando o módulo
import VueResource from 'vue-resource';

// importando o router!
import VueRouter from 'vue-router';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);

// adicionando a propriedade mode com o valor history.
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
