import Ember from 'ember';

export default Ember.Component.extend({
    classNames: [''],
    attributeBindings: ['id'],
    id: 'appMainHeaderId',

    actions: {
        logout() {
            //退出，删除保存到sessionStorage里的信息
            sessionStorage.removeItem("__LOGIN_USER_ID__");
            firebase.auth().signOut();
            // 强制刷新页面
            location.reload();
        }
    }
});
