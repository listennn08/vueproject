import Vue from 'vue'
import mutations from './mutations'
import * as types from './mutations_type'

export const actionIncrease = ({ commit }) => {
  // console.log('actionIncrease');
  commit(types.INCREASE);
}

export const actionDecrease = ({ commit }) => {
  // console.log('actionDecrease');
  commit(types.DECREASE);
}

export const addTodo = ({ commit }, newTodo) => {
  commit(types.ADD_TODO, newTodo);
}

export const toggleTodo = ({ commit }, key) => {
  commit(types.TOGGLE_TODO, key);
}

export const deleteTodo = ({ commit }, key) => {
  commit(types.DELETE_TODO, key);
}

export const updateTodo = ({ commit }, obj) => {
  console.log('updateTodo', obj);
  commit(types.UPDATE_TODO, obj);
}

export const resetCount = ({ commit }) => {
  commit(types.RESET_COUNTDOWN);
  document.getElementById('countdown').className = 'col-md-6 alert-success'
}

export const startCount = ({ commit }) => {
  commit(types.START_COUNTDOWN);
}
