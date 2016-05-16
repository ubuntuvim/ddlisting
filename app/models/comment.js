import DS from 'ember-data';

/**
 * todo的评论信息
 */
export default DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),  //  评论内容
	timestamp: DS.attr('date'),  //评论时间
	user: DS.belongsTo('user'),  //评论人
    todoItem: DS.belongsTo('todo-item'),  //  被评论的todo项

    childComments: DS.hasMany('comment', { inverse: 'comment' }),  //如果当前comment有子comment则这个属性指向子comment
    parentComment: DS.belongsTo('comment', { inverse: 'comment' }),  //如果当前comment是子comment则这个属性指向自己的父comment
});
