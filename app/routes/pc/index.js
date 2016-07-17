/**
* pc端首页
* @Author: ubuntuvim
* @Date:   2016-06-09T17:45:10+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-17T15:31:12+08:00
*/
import Ember from 'ember';
import logout from '../../utils/logout';
import config from '../../config/environment';

export default Ember.Route.extend({
    // model() {
    //     return Ember.RSVP.hash({
    //         users: this.store.findAll('user')
    //     });
    // },

    actions: {
        logout() {
            logout();
            // console.log('config.__LOGIN_USER_ID__ ===  ' + config.APP.__LOGIN_USER_ID__);
            // sessionStorage.removeItem(config.APP.__LOGIN_USER_ID__);
            // Ember.$.cookie(config.APP.__LOGIN_USER_ID__, '', { expires: -1 }); // 删除 cookie
            // 强制刷新页面
            // location.href = "/#/help";
            // location.reload();
            // this.transitionTo('help');
        }
    }
});
