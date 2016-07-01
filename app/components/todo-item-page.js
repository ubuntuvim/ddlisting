// app/components/todo-item-page.js
import Ember from 'ember';

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
            this.store.findRecord('todo-item', id).then((td) => {
                if (star) {
                    td.set('star', false);
                } else {
                    td.set('star', true);
                }
                td.save();
            });
        },
        // 设置完成状态
        doChecked(id, check) {
            this.store.findRecord('todo-item', id).then((td) => {
                if (check) {
                    td.set('recordStatus', 1);
                    td.set('checked', false);
                } else {  //完成状态
                    td.set('checked', true);
                    td.set('recordStatus', 2);
                }
                td.save();
            });
        }
    }
});
