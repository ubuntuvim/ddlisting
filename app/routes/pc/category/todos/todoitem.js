import Ember from 'ember';

export default Ember.Route.extend({
    redirect(model, transition) {
        // 判断用户是否登录了，没有登录不允许进入
        if (!sessionStorage.getItem("__LOGIN_USER_ID__")) {
            this.transitionTo('pc');
        }
    },
    model: function(params) {
        return this.store.findRecord('todo-item', params.todo_id);
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
                    td.set('recordstatus', 1);
                    td.set('checked', false);
                } else {  //完成状态
                    td.set('checked', true);
                    td.set('recordstatus', 2);
                }
                td.save();
            });
        },
        // 删除子任务
        delSubTodo(id) {
            //设置为删除状态
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('recordstatus', 3);
                td.save();
            });
        },
        // 完成子任务
        completeSubTodo(id) {
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('recordstatus', 2);
                td.save();
            });
        }
    }

});
