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
            // 根据用户id过滤
            // categorys: this.store.query('category').then(function(td) {
            //     console.log("td ==> " + td);
            //     console.log("td.get('userId') ==> " + td);
            //     // return td.get('userId') === 'f237b280-cf13-4061-b6af-32339262145f';
            //
            // }),
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
