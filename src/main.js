import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
// init
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/C2F.vue';
import learnComponent from './pages/learnComponent.vue';
import App from './App.vue';
import Count from './pages/count.vue'
import Todo from './pages/todo.vue'
import CountDown from './pages/countdown.vue'
import Taiwan from './pages/Taiwan.vue'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from  '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlus, faTrash, faPencilAlt, faCloudRain } from '@fortawesome/free-solid-svg-icons'
// import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import 'bootstrap/dist/js/bootstrap.js';

library.add(faCoffee, faPlus, faTrash, faPencilAlt, faCloudRain);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const router = new VueRouter({
  // 使用 HTML 5 模式
  // mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent,
      meta: { requireAuth: true },
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: CountDown
    },
    {
      path: '/Taiwan',
      name: 'Taiwan',
      component: Taiwan
    },
    // router 轉址
    { path: '/*', redirect: '/Taiwan' }
  ]
});


new Vue({
  el: '#app',
  // router 掛載設定
  router,
  store,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
});
