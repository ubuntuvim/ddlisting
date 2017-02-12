/**
* PC端主模板路由入口 app/routes/pc.js
* 如果用户未登录则直接转到help页面
* @Author: ubuntuvim
* @Date:   2016-05-27T00:48:14+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-17T17:00:07+08:00
*/
import Ember from 'ember';
import getUserId from '../utils/get-user-id';

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
        Ember.debug('route:pc, user = '+user);

        return Ember.RSVP.hash({
            // loginUser: userId,
            // defaultProjectId: defaultProjectId,  //在页面遍历查找
            user: user,
            projects: this.store.findAll('project'),
            // 数据少，可以直接一次性加载出来
            bgImgList: this.store.findAll('bg-img-libs')
        });
    }
});
