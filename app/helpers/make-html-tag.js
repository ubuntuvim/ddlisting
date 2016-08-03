/**
* 转移html标签，是的在界面显示的数据是带html标签的
* @Author: ubuntuvim
* @Date:   2016-08-04T03:36:01+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-04T03:40:26+08:00
*/
import Ember from 'ember';

export function makeHtmlTag(params/*, hash*/) {
  return Ember.String.htmlSafe(`${params[0]}`);
}

export default Ember.Helper.helper(makeHtmlTag);
