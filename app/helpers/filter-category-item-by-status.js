import Ember from 'ember';

// 过滤掉状态不正常的分类，只显示状态为1的分类
export function filterCategoryItemByStatus(params/*, hash*/) {
  return params[0] === 1;
}

export default Ember.Helper.helper(filterCategoryItemByStatus);
