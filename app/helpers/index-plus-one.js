/**
* 清单广场右侧用户列表的序号
* @Author: ubuntuvim
* @Date:   2016-08-28T03:24:27+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-28T03:33:05+08:00
*/
import Ember from 'ember';

// 下边加一
export function indexPlusOne(params/*, hash*/) {
    return params[0]+1;
}

export default Ember.Helper.helper(indexPlusOne);
