import Ember from 'ember';

export default Ember.Route.extend({
    // categoryCtrl: Ember.inject.controller('category'),
    redirect(model, transition) {
        // 判断用户是否登录了，没有登录不允许进入
        if (!sessionStorage.getItem("__LOGIN_USER_ID__")) {
            this.transitionTo('pc');
        }
    },
    //  根据左侧选择的类型过滤数据
    model: function(params) {
        var category = params.category_id;
        var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        return Ember.RSVP.hash({
            todos: this.store.query('todo-item', { userid: userId }).then(function(todos) {
                return todos.filter((td) => {
                    return (td.get('userId') === '8d52fcf1-f489-47ab-a503-2f787f9c83c2')
                        && (td.get('project') === projectObj.get('projCode'));
                });
            }),
            categoryType: category
        });
    }
});
