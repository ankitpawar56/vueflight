import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import store from './Store/index'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
