export const getCount = state => state.count ;
export const getTodo = state => {
  return state.todos.filter(el => !el.done) ;
}
export const getDone = state => {
  return state.todos.filter(el => el.done);
}

