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
    }
});
