// app/models/user.js
import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    // userId: DS.attr('string'),  //不需要，直接使用id即可
    nickname: DS.attr('string'),
    email: DS.attr('string'),
    password: DS.attr('string'),
    createDate: DS.attr('date'),
    status: DS.attr('number'),  //1-正常；0-删除
    userGrade: DS.attr('number'), //用户等级，暂时用不上预留
    userProfile: DS.attr('string'),  //用户头像
    todos: DS.hasMany('todo-item')
});
