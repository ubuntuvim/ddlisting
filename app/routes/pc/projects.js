/**
* 获取user后再逐步关联user的对象  app/routes/project.js
* @Author: ubuntuvim
* @Date:   2016-06-28T21:08:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-17T16:48:23+08:00
*/
import Ember from 'ember';
import getUserId from '../../utils/get-user-id';

export default Ember.Route.extend({
    // 判断用户是否登录了，没有登录不允许进入
    redirect(model, transition) {
        if (!getUserId()) {
            this.transitionTo('help');
        }
    },
    model() {
        let userId = getUserId();
        let user = this.store.findRecord('user', userId);

        // let projects = this.store.query('project', { userId: userId }).then((ps) => {
        //     return ps;
        // });

        return Ember.RSVP.hash({
            loginUser: userId,
            // project根据user获取
            // user: this.store.peekRecord('user', userId)
            projects: this.store.query('project', { userId: userId }).then((ps) => {
                return ps;
            }),
            user: user
            // userEmail: sessionStorage.getItem("__LOGIN_USER_EMAIL__")
        });
    }
});
