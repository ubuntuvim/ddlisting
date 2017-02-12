/**
* 清单广场用户列表  app/components/pc/pc-index-user-list-panel.js
* @Author: ubuntuvim
* @Date:   2016-07-19T01:49:32+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-29T22:09:01+08:00
*/
import Ember from 'ember';

export default Ember.Component.extend({

    users: Ember.computed(function() {
        return this.store.peekAll('user');
    }),
    enabledUserList: Ember.computed('users.@each.status', function() {
        return this.get('users').filter((u) => {
            return u.get('status') === 1;
        });
    }),
    // 根据积分数量排序
    orderMyIntegral: ['myIntegral:desc'],
    userListSortByMyIntegral: Ember.computed.sort('enabledUserList', 'orderMyIntegral'),
    // 根据todo数量排序
    orderTodoCount: ['myTodoCount:desc'],
    userListSortByTodosCount: Ember.computed.sort('userListSortByMyIntegral', 'orderTodoCount')

});
