import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import App from './App';
import routes from './routers';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './vuex/index'

// 路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');