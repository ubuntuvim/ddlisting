// app/utils/date-util.js

// 获取当前时间，时间格式为：2016-06-29 10:06
export default function dateUtil() {
    var date = new Date(new Date());
    return date.getFullYear() + '-' + (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
}
