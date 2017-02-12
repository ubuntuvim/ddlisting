/**
* 清单广场，最热、最新todo列表
* //TODO 分页如何做？？？
* @Author: ubuntuvim
* @Date:   2016-07-18T23:33:26+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-10T23:52:20+08:00
*/
import Ember from 'ember';
import getUserId from '../../../utils/get-user-id';

export default Ember.Component.extend({

    userId: getUserId(),

    didInsertElement() {
    },

    // 获取所以的todo
    allTodos: Ember.computed(function() {
        return this.store.peekAll('todo-item');
        // return this.store.query('todo-item', { userId: this.get('userId') });
    }),
    // 公开，非子、非删除状态todo数据
    publicNotChildNotDeleteTodoList: Ember.computed('allTodos.@each.isPublish',
                                                'allTodos.@each.isChildOrParent',
                                                'allTodos.@each.recordStatus', function() {
        return this.get('allTodos').filter((td) => {
            // console.log('---------------- ' + td);
            // return true;
            return td.get('isPublish') === 1 && td.get('isChildOrParent') !== 1 && td.get('recordStatus') !== 3;
        });
    }),
    // 根据查询值queryPublicTodoValue过滤,queryPublicTodoValue从public-toods.hbs传递过来
    publicTodosListFilterByTitle: Ember.computed('publicNotChildNotDeleteTodoList', 'queryPublicTodoValue', function() {
        let queryValue = this.get('queryPublicTodoValue');
        if (queryValue) {
            return this.get('publicNotChildNotDeleteTodoList').filter((td) => {
                return td.get('title').indexOf(queryValue) !== -1;
            });
        } else {
            return this.get('publicNotChildNotDeleteTodoList');
        }
    }),
    // 排序：创建时间逆序，新增的排在前面
    sortCreateTime: ['timestamp:desc'],
    latestTodos: Ember.computed.sort('publicTodosListFilterByTitle', 'sortCreateTime'),

    // 最热排序：点赞次数和评论数逆序，
    sortLikeCount: ['likeCount:desc'],
    sortLikeTodos: Ember.computed.sort('publicTodosListFilterByTitle', 'sortLikeCount'),
    sortCommentCount: ['commentCount:desc'],
    mostPopularTodos: Ember.computed.sort('sortLikeTodos', 'sortCommentCount')

});
