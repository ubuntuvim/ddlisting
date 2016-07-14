/**
* 退出，销毁保存到session的数据  app/utils/logout.js
* @Author: ubuntuvim
* @Date:   2016-07-14T23:56:31+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-15T00:26:57+08:00
*/
export default function logout() {
    //退出，删除保存到sessionStorage里的信息
    sessionStorage.removeItem("__LOGIN_USER_ID__");
    sessionStorage.removeItem("__LOGIN_USER_EMAIL__");
    sessionStorage.removeItem("__LOGIN_USER_NICKNAME__");
    sessionStorage.removeItem("__DEFAULT_PROJECT_ID__");
    sessionStorage.removeItem("__DEFAULT_PROFILE_ID__");
    // 强制刷新页面
    // location.reload();
    location.href = "/#/pc/help";
}
