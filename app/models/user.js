import DS from 'ember-data';

/**
 * 用户信息
 2016-01-03 作废，用户类直接使用firebase的用户管理
 */
export default DS.Model.extend({
  userId: DS.attr('string'),   // 用户代码，唯一标记
  username: DS.attr('string'),
  password: DS.attr('string'),
  timestamp: DS.attr('number'),
  grade: DS.attr('number'),  //用户等级： 1-普通用户；2-一级会员；2-二级会员（用户等级后面可能用到）
  email: DS.attr('string'),
  userPic: DS.attr('string'),  //用户头像
  regitsteredDate: DS.attr('date')  //  注册时间
  // todoItem: DS.hasMany('todo-item'),
  // group: DS.belongsTo('user-group'),
  // comments: DS.hasMany('comment')
});
