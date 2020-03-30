import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
// init
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)


import App from './App.vue';

import router from './router'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlus, faTrash, faPencilAlt, faCloudRain, faBars } from '@fortawesome/free-solid-svg-icons'
// import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import jquery from 'jquery'
import 'bootstrap/dist/js/bootstrap.js';

library.add(faCoffee, faPlus, faTrash, faPencilAlt, faCloudRain, faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// const router = new VueRouter({
//     // 使用 HTML 5 模式
//     mode: 'history',
//     base: __dirname,
//     // routre 表
//     routes: [
//         {
//             path: '/hello',
//             name: 'hello',
//             component: Hello
//         }, {
//             path: '/c2f',
//             name: 'c2f',
//             component: CtoF
//         }, {
//             path: '/learnComponent',
//             name: 'learnComponent',
//             component: learnComponent,
//             meta: {
//                 requireAuth: true
//             }
//         }, {
//             path: '/count',
//             name: 'count',
//             component: Count
//         }, {
//             path: '/todo',
//             name: 'todo',
//             component: Todo
//         }, {
//             path: '/countdown',
//             name: 'countdown',
//             component: CountDown
//         }, {
//             path: '/Taiwan',
//             name: 'Taiwan',
//             component: Taiwan
//         }, {
//             path: '/convert',
//             name: 'convert',
//             component: Convert
//         }, {
//             path: '/calculator',
//             name: 'calculator',
//             component: Calculator
//         },
//         // {   path: '/UnloadPage',   name: 'UnloadPage',   component: UnloadPage },
//         {
//             path: '/rateConvert',
//             name: 'rateConvert',
//             component: rateConvert
//         },
//         // router 轉址
//         {
//             path: '/',
//             redirect: '/Taiwan'
//         }
//     ]
// });

new Vue({
    el: '#app',
    // router 掛載設定
    router,
    store,
    // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
    render: h => h( App )
});

jquery('.dropdown-toggle').dropdown();
