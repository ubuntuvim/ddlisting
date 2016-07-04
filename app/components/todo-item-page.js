// app/components/todo-item-page.js
import Ember from 'ember';
import completedTodo from '../utils/completed-todo';
import setStarStatus from '../utils/set-star-status';

export default Ember.Component.extend({
    didUpdate() {
        // 设置左侧分类默认选中，根据URL的分类id判断是哪个分类
        // 但是还需要在project-list-item.js设置点击的时候选中状态
        let ids = "#"+Ember.$("#selectedProjectType").val();
        Ember.$(ids).addClass('pc-category-list-item-active');
    },
    didInsertElement() {
        // Ember.$("#appMainRightId .todo-list .pc-main-completed-todo-list-tip").css('marginBottom', '100px');
        // 设置选中的todo状态，在todo-item-detail-page.js里设置刷新后选中的todo状态
        Ember.$("#appMainRightId .todo-list .list-group .list-group-item").click(function() {

            // 显示todo详细设置页面
            Ember.$("#pcTodoItemId").show();
            // 显示todo详细设置页面的时候收缩列表
            Ember.$('#appMainRightId').css('marginRight', '390px');

            // 先重置所有todo的状态为未选中
            Ember.$("#appMainRightId .todo-list .list-group .a-selector .list-group-item").each(function() {
                Ember.$(this).removeClass('todo-item-selected-status');
            });
            // 设置被点击的todo状态
            Ember.$(this).addClass('todo-item-selected-status');
        });
    },
    actions: {
        // 设置star状态
        doStar(id, star) {
            let ids = "#"+id;
            // 在todo列表上点击star时加背景标注出被点击的是哪个todo：先重置所有todo的状态为未选中
            Ember.$("#appMainRightId .todo-list .list-group .a-selector .list-group-item").each(function() {
                Ember.$(this).removeClass('todo-item-selected-status');
            });
            // 设置被点击的todo状态
            Ember.$(ids).addClass('todo-item-selected-status');

            setStarStatus(id, star, this.store);
        },
        // 设置完成状态
        doChecked(id, check) {
            completedTodo(id, check, this.store);
        }
    }
});
