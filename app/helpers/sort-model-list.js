// app/helpers/sort-model-list.js
import Ember from 'ember';

// 排序列表
export function sortModelList(params/*, hash*/) {
  return params[0] === params[1];
}

export default Ember.Helper.helper(sortModelList);
