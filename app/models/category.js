import DS from 'ember-data';

/**
 * 可以这种todo属于某个项目
 */
export default DS.Model.extend({
    userid: DS.attr('string'),  //方便查询冗余一个属性
    // catgCode: DS.attr('string'),
    catgname: DS.attr('string'),
    timestamp: DS.attr('number'),  //项目创建时间
    catgstatus: DS.attr('number'), // 项目状态：1-正常；2-删除；3-过期 catgStatus
    todos: DS.hasMany('todo-item'),  //关联todo
    user: DS.belongsTo('user')  //关联todo
});
