/**
* 项目介绍页面路由 app/routes/help.js
* @Author: ubuntuvim
* @Date:   2016-07-15T00:52:03+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-28T03:30:38+08:00
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
        },
        // 体验用户
        experience() {
            // 直接写死的一个用户
            let userId = '-KPEBjb5DL79QoY7jqPe';
            Ember.Logger.debug("用户ID：" + userId);
            sessionStorage.setItem(config.APP.__LOGIN_USER_ID__, userId);
            // sessionStorage.setItem(config.APP.__DEFAULT_PROJECT_ID__, item.get('id'));
            // 存储一个带7天期限的 cookie
            Ember.$.cookie(config.APP.__LOGIN_USER_ID__, userId, { expires: 7 });

            location.href = "/#/pc/projects/-KPEBjb5DL79QoY7jqPe/";
        }
    }
});
