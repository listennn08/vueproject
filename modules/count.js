import { type } from "os"

/*
  這邊可以改為用 types 物件取代 matutions_type.js (繼續用也可以)
  然後在前面加上模組名稱作為前綴，用來避免與其他模組重複。
  因為 action、mutation、和 getter 依然是註冊在全域的命名空間
*/

const types = {
  INCREASE: 'count/INCREASE',
  DECREASE: 'count/DECREASE',
  COUNT_RESET: 'count/COUNT_RESET'
}

// count state needs be Object
const state = {
  count: 0
}

// getters could in here return count context
const getters = {
  getCount: state => state.count
}

// actions also construct with Object

const actions = {
  actionIcrease ({ commit }, num) {
    commit(types.INCREASEm, num);
  },
  actionDecrease ({ commit }, num) {
    commit(types.DECREASE, num);
  },
  actionCountReset({ commit }) {
    commit(types.COUNT_RESET);
  }
}

// motations
const mutations = {
  [types.INCREASE] (state, num) {
    state.count += num;
  },
  [types.DECREASE] (state, num) {
    state.count -=num;
  },
  [types.COUNT_RESET] (state) {
    state.count = 0;
    console.log('newCIUNT_RESET - state?' , state.count);
  }
}

/*
  因為我們把 vuex 所有職權都寫在同一隻檔案，
  所以必須要 export 出去給最外層 index.js 組合使用
*/

export default {
  state,
  getters,
  actions,
  mutations
}
