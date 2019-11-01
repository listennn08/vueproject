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
  [types.TOGGLE_TODO] (state, key) {
    let item = state.todos[key];
    console.log(item.done)
    item.done = !item.done;
    console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
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
  }

}
