/**
* 清单广场，最热、最新todo列表
* //TODO 分页如何做？？？
* @Author: ubuntuvim
* @Date:   2016-07-18T23:33:26+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-19T01:46:27+08:00
*/
import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
    },

    // 获取所以的todo
    allTodos: Ember.computed(function() {
        return this.store.findAll('todo-item');
    }),
    // 公开，非子todo数据
    publicAndNotChildTodoList: Ember.computed('allTodos.@each.isPublish',
                                                'allTodos.@each.isChildOrParent', function() {
        return this.get('allTodos').filter((td) => {
            return td.get('isPublish') === 1 && td.get('isChildOrParent') !== 1;
        });
    }),
    // 排序：创建时间逆序，新增的排在前面
    sortCreateTime: ['timestamp:desc'],
    latestTodos: Ember.computed.sort('publicAndNotChildTodoList', 'sortCreateTime'),

    // 最热排序：点赞次数和评论数逆序，
    sortLikeCount: ['likeCount:desc'],
    sortLikeTodos: Ember.computed.sort('publicAndNotChildTodoList', 'sortLikeCount'),
    sortCommentCount: ['commentCount:desc'],
    mostPopularTodos: Ember.computed.sort('sortLikeTodos', 'sortCommentCount')
});
