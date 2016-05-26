import DS from 'ember-data';

export default DS.Model.extend({
  groupCode: DS.attr('string'),  //用户组编码
  groupName: DS.attr('string'),
  timestamp: DS.attr('number'),
  users: DS.hasMany('user')
});
