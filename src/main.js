import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
// 引入全局样式
import './assets/css/global.css'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
// Vue(App).use(router).mount('#app')