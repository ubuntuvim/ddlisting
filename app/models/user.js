// app/models/user.js
import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    // userId: DS.attr('string'),  //不需要，直接使用id即可
    nickname: DS.attr('string'),
    email: DS.attr('string'),
    password: DS.attr('string'),
    createdate: DS.attr('number'),
    status: DS.attr('number'),  //1-正常；0-删除
    usergrade: DS.attr('number'), //用户等级，暂时用不上预留
    userprofile: DS.attr('string'),  //用户头像
    myIntegral: DS.attr('number'), //我的积分
    myTodoCount: DS.attr('number'), //我的todo总数
    // todos: DS.hasMany('todo-item'),  //通过project关联过去即可
    projects: DS.hasMany('project'),
    profile: DS.belongTo('profile')
});
