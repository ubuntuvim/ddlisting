/**
* 顶部导航栏处理类  app/components/app-main-header.js
* @Author: ubuntuvim
* @Date:   2016-07-09T15:21:32+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-14T23:57:02+08:00
*/

import Ember from 'ember';
import logout from '../../utils/logout';
// import config from '../config/environment';

// 顶部导航栏
export default Ember.Component.extend({

    classNames: [''],
    attributeBindings: ['id'],
    id: 'appMainHeaderId',

    didInsertElement() {
    },

    actions: {
        logout() {
            logout();
        }
    }
});
