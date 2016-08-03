/**
* 格式化日期为 yyyy-mm-dd格式  app/helpers/format-date.js
* @Author: ubuntuvim
* @Date:   2016-06-29T01:54:00+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-04T01:52:41+08:00
*/

import Ember from 'ember';

// 格式化时间
export function formatDate(params/*, hash*/) {
    // 时间戳转为 yyyy-mm-dd hh:mm
    var value = params[0];

    if (!value) return '';

    var date = new Date(value);
    var Y = date.getFullYear() + '年';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
    var D = date.getDate() + '日 ';
    var h = date.getHours() + ':';
    var m = date.getMinutes();
    // s = date.getSeconds();

    return Y+M+D+h+m;
}

export default Ember.Helper.helper(formatDate);
