/**
* 清单广场页面，单个任务组件  app/components/pc/pc-idnex-todo-item.js
* @Author: ubuntuvim
* @Date:   2016-07-19T20:17:40+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-19T23:55:10+08:00
*/
import Ember from 'ember';
import getUserId from '../../utils/get-user-id';

export default Ember.Component.extend({

    userId: getUserId(),

    actions: {
        showDetail(id) {
            console.log('showDetail.....');
            let todo = this.store.peekRecord('todo-item', id);
            console.log("todo.get('title') === " + todo.get('title'));
            Ember.$("#titleId").html(todo.get('title'));
            // 设置子任务
            let subTodoListHtml = '';
            todo.get('childTodos').forEach(function(item) {
                subTodoListHtml += "<p>"+item.get('title') + "</p>";
            });
            if (!subTodoListHtml) {
                subTodoListHtml = "<p>无子任务</p>";
            }
            Ember.$("#subTodoListId").html(subTodoListHtml);

            // 显示模态框
            Ember.$("#pcIndexTodoDetailModalWin").modal('toggle');
            // 加载完数据后显示模态框
            // Ember.$('#pcIndexTodoDetailModalWin').on('hidden.bs.modal', (e) => {
            //
            // });
        }
    }
});
