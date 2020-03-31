import Vue from 'vue'
import App from './components/app'
import vuetify from './plugins/vuetify';
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
