/**
* 从session获取当前登录用户的id
* @Author: ubuntuvim
* @Date:   2016-07-09T12:59:40+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T13:12:19+08:00
*/
export default function getUserFromSession() {
    return { userId: sessionStorage.getItem("__LOGIN_USER_ID__"),
            userEmail: sessionStorage.getItem("__LOGIN_USER_EMAIL__"),
            userNickname: sessionStorage.getItem("__LOGIN_USER_NICKNAME__")
         };
}
