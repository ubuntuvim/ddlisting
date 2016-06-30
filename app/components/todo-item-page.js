// app/components/todo-page.js
import Ember from 'ember';

export default Ember.Component.extend({
    didUpdate() {
        // Ember.$("#appMainRightId .todo-list .list-group:last").css('marginBottom', '100px');
    },
    didInsertElement() {
        // Ember.$("#appMainRightId .todo-list .pc-main-completed-todo-list-tip").css('marginBottom', '100px');
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
