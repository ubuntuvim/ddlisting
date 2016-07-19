/**
* 判断每个入参是否都相等  app/helpers/eq.js
* @Author: ubuntuvim
* @Date:   2016-07-19T20:17:40+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-19T20:28:52+08:00
*/
import Ember from 'ember';

export function eq(params/*, hash*/) {
    let len = params.length;
    let ret = true;
    if (len && len > 0) {
        for (var i = 0; i < len-1; i++) {
            ret = (ret && (params[i] === params[i+1]));
        }
    } else {
        ret = false;
    }

    return ret;
}

export default Ember.Helper.helper(eq);
