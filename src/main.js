import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common.less'
import './config/rem'

Vue.use(VueRouter) //安装路由
const router = new VueRouter({
    routes
})

//runtime

new Vue({
    router,
    store,

}).$mount("#app")

/*new Vue({
    router,
    store,
}).$mount('#app');
*/