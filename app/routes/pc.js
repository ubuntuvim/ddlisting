/**
* PC端主模板路由入口 app/routes/pc.js
* @Author: ubuntuvim
* @Date:   2016-05-27T00:48:14+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-12T01:44:09+08:00
*/
import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        let userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        let user = this.store.peekRecord('user', userId);
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

        return Ember.RSVP.hash({
            loginUser: sessionStorage.getItem("__LOGIN_USER_ID__"),
            defaultProjectId: sessionStorage.getItem('__DEFAULT_PROJECT_ID__'),
            user: user,
            bgImgList: this.store.findAll('bg-img-libs')
        });
    }
});
