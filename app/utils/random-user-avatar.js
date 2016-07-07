/**
* 获取一个随机的用户头像URL
* @Author: ubuntuvim
* @Date:   2016-07-07T23:03:36+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-07T23:22:53+08:00
*/
export default function randomUserAvatar() {
    let avatars = [
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/1.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/2.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/3.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/4.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/5.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/6.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/7.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/8.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/9.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/10.ico',


        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/11.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/12.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/13.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/14.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/15.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/16.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/17.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/18.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/19.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/20.ico',

        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/21.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/22.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/23.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/24.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/25.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/26.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/27.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/28.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/29.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/30.ico',

        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/31.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/32.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/33.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/34.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/35.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/36.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/37.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/38.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/39.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/40.ico',


        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/41.ico',
        'https://res.cloudinary.com/ddlisting/image/upload/v1467904129/user%20head%20pic/42.ico'
    ];

    return avatars[randomNum(0, 41)];
}
// 生成范围内的随机数
function randomNum(Min, Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}
