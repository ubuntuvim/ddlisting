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
        // let defaultProjectId = user.get('projects').forEach((item) => {
        //     if ()
        // });
        // let profile = null;
        // if (user) {
        //     profile = this.store.peekRecord('profile', user.get('profile').get('id'))
        // }
        // let profile = this.store.peekRecord('profile', user.get('profile').get('id'));
        // let profile = null;
        // console.log(user.get('profile').get('id'));
        // this.store.findRecord('profile', user.get('profile').get('id')).then((p) => {
        //     console.log('p',p);
        //     console.log('p',p.get('isOpenPromptTone'));
        //     profile = p;
        // });
        // console.log(profile.get('isOpenPromptTone'));

        // sessionStorage.setItem("__LOGIN_USER_ID__", userId);
        // 从服务器获取所有数据，会自动设置到缓存store里
        // this.store.findAll('project');

        return Ember.RSVP.hash({
            // loginUser: userId,
            // defaultProjectId: defaultProjectId,  //在页面遍历查找
            user: user,
            // 数据少，可以直接一次性加载出来
            bgImgList: this.store.findAll('bg-img-libs')
        });
    }
});
