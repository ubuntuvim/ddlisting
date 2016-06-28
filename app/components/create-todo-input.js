// app/components/create-todo-input.js

import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['form-group', 'has-feedback'],

    didInsertElement() {

        // 中间部分，新增TODO输入框右边图标样式设置
        Ember.$("#appMainRightId .form-group .glyphicon").click(function() {
            if (Ember.$(this).css("opacity") === '1') {
                Ember.$(this).css("opacity", 0.4);
                Ember.$("#star").val('0');
            } else {
                Ember.$(this).css("opacity", 1);
                Ember.$("#star").val('1');
            }
        });
    },

    actions: {
        //保存todo
        saveTodoItem() {

            var title = this.get('title');
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
                // 获取默认分类id
                let defaultProjectId = Ember.$("#projecId").val();
                Ember.Logger.debug("保存todo 分类id: " + defaultProjectId);
                let todo = this.store.createRecord('todo-item', {
                    userId: userId,
                    title: title,
                    checked: false,
                    timestamp: new Date().getTime(),
                    star: star,
                    recordStatus: 1,
                    startDate: new Date().getTime(),
                    isPublish: 0,
                    isChildOrParent: 3,
                    // user: this.store.peekRecord('user', userId),
                    // project: this.store.peekRecord('project', defaultProjectId)
                    // 为了兼容旧数据，撤销关联
                    project: defaultProjectId
                }).save().then(() => {

                    // user.get('todos').pushObject(todo);
                    // user.save();
                    // let category = this.store.peekRecord('category', defaultProjectId);
                    // category.get('categorys').pushObject(todo);
                    // category.save();
                    //清空title
                    this.set('title', '');
                });

            }  //if title
        }
    }
});
