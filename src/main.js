import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';

// importando o VeeValidate 
import VeeValidate from 'vee-validate';

// registrando o plugin 
Vue.use(VeeValidate);

// registrando o módulo/plugin no global view object
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000';

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
