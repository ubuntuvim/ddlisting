/**
* 清单广场 app/routes/pc/public-todos.js
* @Author: ubuntuvim
* @Date:   2016-05-27T00:48:14+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-04T03:44:30+08:00
*/
import Ember from 'ember';
import getUserId from '../../utils/get-user-id';
import logout from '../../utils/logout';

export default Ember.Route.extend({

    // 判断用户是否登录了，没有登录不允许进入
    redirect(model, transition) {
        if (!getUserId()) {
            this.transitionTo('help');
        }
    },

    model() {
        let userId = getUserId();
        let user = this.store.peekRecord('user', userId);
        Ember.debug('route:public-todos, user = '+user);

        return Ember.RSVP.hash({
            // loginUser: userId,
            // defaultProjectId: defaultProjectId,  //在页面遍历查找
            user: user,
            bgImgList: this.store.peekAll('bg-img-libs')
        });
    },
    actions: {
        logout() {
            logout();
        }
    }
});
