import Vue from 'vue'
import Router from 'vue-router'

// page
import Hello from '../pages/Hello.vue';
import CtoF from '../pages/C2F.vue';
import learnComponent from '../pages/learnComponent.vue';

import Count from '../pages/count.vue'
import Todo from '../pages/todo.vue'
import CountDown from '../pages/countdown.vue'
import Taiwan from '../pages/Taiwan.vue'
// import UnloadPage from './pages/UnloadPage.vue'
import Convert from '../pages/Convert.vue'
import Calculator from '../pages/Calculator.vue'
import rateConvert from '../pages/rateConvert.vue'

Vue.use( Router )

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: __dirname +'/hello',
            name: 'hello',
            component: Hello
        }, {
            path: '/c2f',
            name: 'c2f',
            component: CtoF
        }, {
            path: '/learnComponent',
            name: 'learnComponent',
            component: learnComponent,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/count',
            name: 'count',
            component: Count
        }, {
            path: '/todo',
            name: 'todo',
            component: Todo
        }, {
            path: '/countdown',
            name: 'countdown',
            component: CountDown
        }, {
            path: '/Taiwan',
            name: 'Taiwan',
            component: Taiwan
        }, {
            path: '/convert',
            name: 'convert',
            component: Convert
        }, {
            path: '/calculator',
            name: 'calculator',
            component: Calculator
        },
        // {   path: '/UnloadPage',   name: 'UnloadPage',   component: UnloadPage },
        {
            path: '/rateConvert',
            name: 'rateConvert',
            component: rateConvert
        },
        // router 轉址
        {
            path: '/',
            redirect: '/Taiwan'
        }
    ]
})
