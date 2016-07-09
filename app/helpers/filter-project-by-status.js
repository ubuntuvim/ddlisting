/**
* 根据project的状态过滤
* @Author: ubuntuvim
* @Date:   2016-07-09T14:10:23+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T14:18:04+08:00
*/
import Ember from 'ember';

export function filterProjectByStatus(params/*, hash*/) {
    let status = params[0];  //todo状态
    let type = params[1]; //过滤类型
    // 项目状态：1-正常；2-删除；3-过期
    if (type) {
        if ('__NOT_DEL__' === type) {  //非删除状态的
            return status === 1;
        } else if ('__DEL__' === type) {  //删除状态
            return status === 2;
        } else {  //  其他状态都不显示
            return false;
        }
    } else {
        return false;
    }
}

export default Ember.Helper.helper(filterProjectByStatus);
