/**
* 从session获取当前登录用户的id
* 首先从session中获取，如果为空再从cookie中获取
* @Author: ubuntuvim
* @Date:   2016-07-09T12:59:40+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-19T21:02:19+08:00
*/
import Ember from 'ember';

export default function getUserId() {
    let userId = sessionStorage.getItem("__LOGIN_USER_ID__");
    if (!userId) {
        userId = Ember.$.cookie('__LOGIN_USER_ID__'); // 读取 cookie
    }
    // Ember.Logger.debug("获取用户ID：" + userId);
    if (userId) {
        return userId;
    } else {
        location.href = "/#/help";
    }
}
