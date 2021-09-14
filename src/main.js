import Vue from 'vue'
import App from './App.vue'

//BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vuetify
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App), 
}).$mount('#app')
