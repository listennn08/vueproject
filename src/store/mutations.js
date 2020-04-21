import * as types from './mutations_type'
import Vue from 'vue'
import { stat } from 'fs';

export const state = {
	count: 0,
	todos: [
		{ key: 0, content: 'vue.js 2.0', done: true },
		{ key: 1, content: 'vuex 2.0', done: false },
		{ key: 2, content: 'vue-router 2.0', done: false },
		{ key: 3, content: 'vue-resource 2.0', done: false },
		{ key: 4, content: 'webpack', done: false }
	],
	countdown:{
		mm: '08',
		ss: '00',
	},
	rateConvert: {
		options: '',
		fromNum: 0,
		toNum: 0,
		API: "https://cors-anywhere.herokuapp.com/https://tw.rter.info/capi.php"
	},
	wheaterData: {
		h2: '',
		h3: '',
		AT: null,   //體感溫度
		PoP: null,  //降雨機率
		Wx: null,   // 天氣現象 每小時
		T: null,    // 溫度  24
		RH: null,   //相對濕度  24
		CI: null,   //舒適度指數  24
		WeatherDescription: null,   //天氣預報綜合描述  24
		PoP6h: null,    //6小時降雨機率 12
		WS: null,   //風速  24
		WD: null,   //風向  24
		Td: null,   //露點溫度 24
	}
}

let todoKey = state.todos.length;

export const mutations = {
	[types.INCREASE] (state) {
		state.count += 1;
	},
	[types.DECREASE] (state) {
		state.count -= 1;
	},
	[types.ADD_TODO] (state, newTodo) {
		if (newTodo != ''){
			state.todos.push({
				key:todoKey,
				content: newTodo,
				done: false,
			});
			todoKey++;
    	}
	},
	[types.TOGGLE_TODO] (state, obj) {
		for (let i in state.todos) {
			let item = state.todos[i];
			if (item.key === obj.key) {
				item.done = obj.checked;
				// console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
				break;
			}
		}
	},
	[types.DELETE_TODO] (state, key) {
		let item = state.todos[key];
		console.log('DELETE_TODO:', item.content, ', index?', key);
		state.todos.splice(key, 1);
	},
	[types.UPDATE_TODO] (state, obj) {
		for (let i in state.todos) {
			let item = state.todos[i];
			if (item.key === obj.key) {
				console.log('UPDATE_TODO:',item.content, 'to->',obj.change);
				state.todos[i].content = obj.change;
				break;
			}
		}
	},
	[types.START_COUNTDOWN] (state) {
		let countdown = state.countdown;
		if (countdown.ss == 0) {
			countdown.mm = '0' + --countdown.mm;
			countdown.ss = 59;
		} else {
			countdown.ss--;
		}
		if (+countdown.ss < 10) {
			countdown.ss = '0' + countdown.ss;
		}
		if (+countdown.mm == 6 && +countdown.ss == 0) {
			document.getElementById('countdown').className = 'col-md-6 alert-warning';
			document.getElementById('audio').play();
		}
		if (+countdown.mm == 0 && +countdown.ss == 0) {
			document.getElementById('countdown').className = 'col-md-6 alert-danger';
			document.getElementById('audio').play();
			clearInterval(countdown.Timer);
		}
	},
	[types.RESET_COUNTDOWN] (state) {
		state.countdown.mm = '08';
		state.countdown.ss = '00';
		document.getElementById('countdown').className = 'col-md-6 alert-success'
	},
	[types.CONVERT_RATE] (state) {
		state.rateConvert.fromNum = state.rateConvert.fromNum ? parseFloat(state.rateConvert.fromNum) : 0;
		val = val ? val : state.rateConvert.fromNum;
	}
}
