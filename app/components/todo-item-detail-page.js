import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        // 引入textarea根据内容自适应插件
        Ember.$('textarea').flexText();
        //鼠标移动到子任务列表显示右侧的删除按钮
        Ember.$("#todoItemId .inner .todo-item-middle .subtodo-list .list-group").mousemove(function() {
            $(this).children("p").children('.glyphicon').show();
        });
        //鼠标移开不显示
        Ember.$("#todoItemId .inner .todo-item-middle .subtodo-list .list-group").mouseout(function() {
            $(this).children("p").children('.glyphicon').hide();
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
