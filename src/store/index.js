// vuex 数据管理仓库
import Vue from "vue";
import Vuex from "vuex";
// 使用
Vue.use(Vuex);

// 导入仓库
import BMS from "./BMS";
import homePage from "./homePage";

// 暴露
export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules:{
        BMS,
        homePage,
    }

})
