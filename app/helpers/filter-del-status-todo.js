import Ember from 'ember';

// 过滤删除状态的子任务
export function filterDelStatusSubTodo(params/*, hash*/) {
  return params[0] !== 3;
}

export default Ember.Helper.helper(filterDelStatusSubTodo);
