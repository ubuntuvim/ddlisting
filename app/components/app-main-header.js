// app/components/app-main-header.js
import Ember from 'ember';
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
            //退出，删除保存到sessionStorage里的信息
            sessionStorage.removeItem("__LOGIN_USER_ID__");
            //  初始化firebase对象
            // var logoutFirebase = firebase.initializeApp(config.firebase, "LogoutFirebase");
            logoutFirebase.auth().signOut();
            // 强制刷新页面
            location.reload();
        }
    }
});
