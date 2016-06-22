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
                // let user = this.store.peekRecord('user', userId);
                var categoryId = this.get('model').categoryType; //分类id
                console.log('categoryId ==== ' + categoryId);
                if (!categoryId || categoryId === 'myTodos') {
                    // 提示用户先新增分类
                    new Messenger().post({
                        extraClasses: 'messenger-fixed messenger-on-top',
                        theme: 'flat',
                        type: 'info',
                        message: '请先新增分类(亲，点击左侧加号可以新增份额哦！)'
                    });
                } else {
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
                        ischildorparent: 3,
                        user: this.store.peekRecord('user', userId),
                        category: this.store.peekRecord('category', categoryId)
                    }).save().then(() => {

                        // user.get('todos').pushObject(todo);
                        // user.save();
                        // let category = this.store.peekRecord('category', categoryId);
                        // category.get('categorys').pushObject(todo);
                        // category.save();
                        //清空title
                        this.set('title', '');
                    });
                } // if categoryType

            }  //if title
        }
    }
});
