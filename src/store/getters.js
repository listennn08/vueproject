export const getCount = state => state.count ;
export const getTodo = state => {
  return state.todos.filter(el => !el.done) ;
}
export const getDone = state => {
  return state.todos.filter(el => el.done);
}
export const getCountdownmm = state => state.countdown.mm ;
export const getCountdownss = state => state.countdown.ss ;
export const getCountdownTime = state => state.countdown.time;

