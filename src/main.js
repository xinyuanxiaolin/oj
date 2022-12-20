import Vue from 'vue'
import App from './App.vue'

// 全局导入elementui 
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
// 使用
Vue.use(ElementUI);

// 导入路由
import router from "@/router"
// 导入仓库
import store from "@/store"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
