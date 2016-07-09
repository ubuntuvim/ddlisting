/**
* 获取user后再逐步关联user的对象  app/routes/project.js
* @Author: ubuntuvim
* @Date:   2016-06-28T21:08:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T15:49:09+08:00
*/
import Ember from 'ember';

export default Ember.Route.extend({
    // 判断用户是否登录了，没有登录不允许进入
    redirect(model, transition) {
        if (!sessionStorage.getItem("__LOGIN_USER_ID__")) {
            this.transitionTo('pc');
        }
    },
    model() {
        let userId = sessionStorage.getItem("__LOGIN_USER_ID__");

        return Ember.RSVP.hash({
            // project根据user获取
            user: this.store.peekRecord('user', userId),
            userEmail: sessionStorage.getItem("__LOGIN_USER_EMAIL__")
        });
    }
});
