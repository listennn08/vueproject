export const getCount = state => state.count ;
export const getTodo = state => {
  return state.todos.filter(el => !el.done) ;
}
export const getDone = state => {
  return state.todos.filter(el => el.done);
}
export const getCountMinute = state => state.countdown.mm;
export const getCountSecond = state => state.countdown.ss;
export const getCountTimer = state => state.countdown.Timer;
export const getCountA = state => state.countdown;
