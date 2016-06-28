// app/routes/project.js

import Ember from 'ember';

export default Ember.Route.extend({

    // redirect(model, transition) {
    //     // 判断用户是否登录了，没有登录不允许进入
    //     if (!sessionStorage.getItem("__LOGIN_USER_ID__")) {
    //         this.transitionTo('pc');
    //     }
    // },
    // beforeModel: function() {
    //     return this.get('session').fetch().catch(function() {});
    // },
    model() {
        let userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        return Ember.RSVP.hash({
            //TODO 根据用户id过滤
            projects: this.store.findAll('project'),

            // this.store.query('person', { orderBy: 'name', equalTo: 'Peter' });
            // projects: this.store.query('project', { orderBy: 'userId', equalTo: userId }),

            // projects: this.store.query('project', { userId: userId, projStatus: 1 }).then((proj) => {
            //     return proj.filter((c) => {
            //         return (c.get('userId') === userId)
            //             && (c.get('projStatus') === 1);
            //     });
            // }),
            // todos: this.store.query('todo-item', { userid: userId}).then(function(todos) {
            //     return todos;
            // }),
            userEmail: sessionStorage.getItem("__LOGIN_USER_EMAIL__")
        });
    }
});
