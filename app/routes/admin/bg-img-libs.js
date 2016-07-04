// app/routes/bg-img-libs.js
import Ember from 'ember';

// 设置app的背景图片库
export default Ember.Route.extend({
    beforeModel() {
        if (sessionStorage.getItem('__ADMIN_TOKEN__')) {
            this.transitionTo('admin.login');
        }
    }
});
