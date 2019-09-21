import Vue from 'vue'
import Base from './components/Base.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Base),
}).$mount('#app')
