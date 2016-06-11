import DS from 'ember-data';

/**
 * todo项:项目入口model，路由m.todoitem，pc.todoitem
 */
export default DS.Model.extend({
    userid: DS.attr('string'),  //方便查询冗余一个属性
    title: DS.attr('string'),
    checked: DS.attr('boolean'),  // 是否勾选了todo列表前面的完成按钮
    timestamp: DS.attr('number'),
    star: DS.attr('boolean'),
    recordstatus: DS.attr('number'),  //todo项状态：1-未完成（新增）；2-完成；3-删除（放到回收站可恢复）；4-完全删除（不可恢复）
    startdate: DS.attr('string'),  //任务开始时间
    enddate: DS.attr('string'),  //任务结束时间
    ispublish: DS.attr('number'),  //是否公开：1-公开(任何人都可以看到)；0-不公开(自己看)
    ischildorparent: DS.attr('number'),  //标记本todo是作为父todo还是子todo：1-子todo；2-父todo；3-本身（没有任何关联）
    // 关系放在多的一方，当时model类还需要使用这个属性关联
    childtodos: DS.hasMany('todo-item', { inverse: 'parenttodo' }),  //如果当前todo有子todo则这个属性指向子todo
    parenttodo: DS.belongsTo('todo-item', { inverse: 'childtodos' }),  //如果当前todo是子todo则这个属性指向自己的父todo
    remark: DS.attr('string'),
    // user: DS.attr('string'),  // 登录用户id
    user: DS.belongsTo('user'),
    // comments: DS.hasMany('comment'),  // 关系放在多的一方
    // category: DS.attr('string')  //所属项目编号
    category: DS.belongsTo('category')  //所属项目编号
});
