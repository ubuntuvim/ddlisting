/**
* 项目介绍页面路由 app/routes/help.js
* @Author: ubuntuvim
* @Date:   2016-07-15T00:52:03+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-17T22:27:16+08:00
*/
import Ember from 'ember';
import getUserId from '../utils/get-user-id';
import config from '../config/environment';
// import logout from '../utils/logout';

export default Ember.Route.extend({
    // 判断用户是否登录了，没有登录不允许进入
    redirect(model, transition) {
        if (!getUserId()) {
            this.transitionTo('help');
        }
    },
    model() {
        return Ember.RSVP.hash({
            loginUser: getUserId(),
            user: this.store.peekRecord('user', getUserId())
        });
    },
    actions: {
        logout() {
            sessionStorage.removeItem(config.APP.__LOGIN_USER_ID__);
            Ember.$.cookie(config.APP.__LOGIN_USER_ID__, '', { expires: -1 }); // 删除 cookie
            location.reload();  //在help页面退出需要强制刷新页面
            // logout();
        }
    }
});
