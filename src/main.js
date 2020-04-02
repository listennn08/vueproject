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



new Vue({
    el: '#app',
    // router 掛載設定
    router,
    store,
    // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
    render: h => h( App )
});

jquery('.dropdown-toggle').dropdown();
