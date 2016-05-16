import DS from 'ember-data';

/**
 * todo项
 */
export default DS.Model.extend({
  title: DS.attr('string'),
  checked: DS.attr('boolean'),  // 是否勾选了todo列表前面的完成按钮
  timestamp: DS.attr('number'),
  star: DS.attr('boolean'),
  recordStatus: DS.attr('number'),  //todo项状态：1-未完成（新增）；2-完成；3-删除（放到回收站可恢复）；4-完全删除（不可恢复）
  startDate: DS.attr('string'),  //任务开始时间
  endDate: DS.attr('string'),  //任务结束时间
  isPublish: DS.attr('number'),  //是否公开：1-公开(任何人都可以看到)；0-不公开(自己看)
  isChildOrParent: DS.attr('number'),  //标记本todo是作为父todo还是子todo：1-子todo；2-父todo；3-本身（没有任何关联）
  // 关系放在多的一方，当时model类还需要使用这个属性关联
  childTodos: DS.hasMany('todo-item', { inverse: 'parentTodo' }),  //如果当前todo有子todo则这个属性指向子todo
  parentTodo: DS.belongsTo('todo-item', { inverse: 'childTodos' }),  //如果当前todo是子todo则这个属性指向自己的父todo
  remark: DS.attr('string'),

  // childTodos: DS.hasMany('todo-item', { async: true }),  //如果当前todo有子todo则这个属性指向子todo
  // parentTodo: DS.belongsTo('todo-item'),  //如果当前todo是子todo则这个属性指向自己的父todo


  user: DS.attr('string'),  // 登录用户id
  // comments: DS.hasMany('comment'),  // 关系放在多的一方
  project: DS.attr('string')  //所属项目编号
});
