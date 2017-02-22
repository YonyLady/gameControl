// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
import index from './views/index';
import list from './views/list';
import setting from './views/setting';
import appIndex from './views/app_index.vue';

const routers = [{
    path: '/',
    component: index
},{
    path: '/list',
    component: list
},{
    path: '/index',
    component: index
},{
    path: '/setting',
    component: setting
},{
    path: '/appIndex',
    component: appIndex
}];

export default routers;