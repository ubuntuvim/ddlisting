// app/routes/category.js

import Ember from 'ember';

export default Ember.Route.extend({
    redirect(model, transition) {
        // 判断用户是否登录了，没有登录不允许进入
        if (!sessionStorage.getItem("__LOGIN_USER_ID__")) {
            this.transitionTo('pc');
        }
    },
    model() {
        let userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        return Ember.RSVP.hash({
            // 根据用户id过滤
            // categorys: this.store.findAll('category'),
            categorys: this.store.queryRecord('category', { userid: userId, catgstatus: 1 }).then(function(categorys) {
                return categorys;
            }),
            todos: this.store.queryRecord('todo-item', { userid: userId, recordstatus: 1 }).then(function(todos) {
                return todos;
            }),
            userEmail: sessionStorage.getItem("__LOGIN_USER_EMAIL__")
        });
    }
});
