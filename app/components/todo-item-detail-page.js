import Ember from 'ember';

export default Ember.Component.extend({
    subTodoList: Ember.computed(function() {

    }),
    didInsertElement() {
        // 展开右侧详细设置页面的同时缩小中间部分
        Ember.$('#appMainRightId').css("marginRight", '390px');
        // 引入textarea根据内容自适应插件
        Ember.$('textarea').flexText();
        //鼠标移动到子任务列表显示右侧的删除按钮
        Ember.$("#todoItemId .inner .todo-item-middle .subtodo-list .list-group").mousemove(function() {
            Ember.$(this).children("p").children('.glyphicon').show();
        });
        //鼠标移开不显示
        Ember.$("#todoItemId .inner .todo-item-middle .subtodo-list .list-group").mouseout(function() {
            Ember.$(this).children("p").children('.glyphicon').hide();
        });
    },
    actions: {
        // 保存子任务
        saveSubTodo() {
            var title = this.get('subTodoTitle');
            if (title) {
                var star = false;
                if (Ember.$('#star').val() === '1') {
                    star = true;
                }
                Ember.Logger.debug("保存todo star: " + star);
                var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
                Ember.Logger.debug("保存todo userId: " + userId);
                if (!userId) {
                    location.reload(); //获取不到userid退出，让用户再次登录
                }
                var categoryId = this.get('model').categoryType; //分类id
                Ember.Logger.debug("保存todo userId: " + userId);
                Ember.Logger.debug("保存todo 分类id: " + categoryId);
                let todo = this.store.createRecord('todo-item', {
                    userid: userId,
                    title: title,
                    checked: false,
                    timestamp: new Date().getTime(),
                    star: star,
                    recordstatus: 1,
                    startdate: new Date().getTime(),
                    ispublish: 0,
                    ischildorparent: 1,
                    user: this.store.peekRecord('user', userId),
                    category: this.store.peekRecord('category', categoryId)
                }).save().then(() => {
                    this.set('subTodoTitle', '');
                });
            }
        },
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
        },
        // 更新title
        updateTitle(id) {
            console.log("model.title == " + this.get('model.title'));
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('title', this.get('model.title'))
                td.save();
            });
        }
    }
});
