import DS from 'ember-data';

/**
 * 可以这种todo属于某个项目
 */
export default DS.Model.extend({
    userId: DS.attr('string'),
    // catgCode: DS.attr('string'),
    catgName: DS.attr('string'),
    timestamp: DS.attr('number'),  //项目创建时间
    catgStatus: DS.attr('number') // 项目状态：1-正常；2-删除；3-过期
    // todoItems: DS.hasMany('todo-item')  //关联todo
});
