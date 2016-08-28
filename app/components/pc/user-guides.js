/**
* 用于引导
* @Author: ubuntuvim
* @Date:   2016-08-28T04:34:18+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-28T23:47:07+08:00
*/
import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Component.extend({
    didInsertElement() {
        // 默认首次进入才显示，并且进入的是主页才显示
        if (!Ember.$.cookie(config.APP.__SHOW_USER_GUIDE_FLAG__) && (window.location.href).indexOf('projects') >= 0) {
            Ember.$.cookie(config.APP.__SHOW_USER_GUIDE_FLAG__, true, { expires: 365 });
            // 开始用户引导
            intro.start();
        }
    }
});
