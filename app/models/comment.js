import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    title: DS.attr('string'),
    createDate: DS.attr('number'),  //创建时间

    userId: DS.attr('string'),// 登录用户id，为了方便数据查询冗余字段
    userEmail: DS.attr('string'),// 登录用户邮箱，为了方便数据查询冗余字段
    userProfile: DS.attr('string'),  //用户头像，为了方便数据查询冗余字段

    likeCount: DS.attr('number'),  //like数量
    greatCount: DS.attr('number'),  //点赞数量
    commentCount: DS.attr('number'),  //被评论数量

    // isChildOrParent: DS.attr('number'),  //标记本comment是作为父comment还是子comment：1-子comment；2-父comment；3-本身（没有任何关联）
      //如果当前comment有子comment则这个属性指向子comment
    childComments: DS.hasMany('comment', { inverse: 'parentComment' }),
    //如果当前comment是子comment则这个属性指向自己的父comment
    parentComment: DS.belongsTo('comment', { inverse: 'childComments' }),  
    // 还不确定是佛要关联到user上
    user: DS.belongsTo('user'),
    // 关系放在多的一方，当时model类还需要使用这个属性关联
    todoItem: DS.belongsTo('todo-item')
});
