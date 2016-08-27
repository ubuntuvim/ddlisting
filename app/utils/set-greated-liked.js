/**
* 点赞、like设置
* @Author: ubuntuvim
* @Date:   2016-08-05T01:53:53+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-09T23:15:11+08:00
*/
import Ember from 'ember';

export default function setGreatedLiked(store, modelName, fieldName, id, elemId) {
    elemId += id;  //拼接成元素的id
    // 更新 todo 点赞数
    if (Ember.$(elemId).hasClass('gread-like-active')) {
        store.findRecord(modelName, id).then((td) => {
            td.set(fieldName, (td.get(fieldName)-1));
            td.save();
        });
        Ember.$(elemId).removeClass('gread-like-active');
    } else {
        store.findRecord(modelName, id).then((td) => {
            td.set(fieldName, (td.get(fieldName)+1));
            td.save();
        });
        Ember.$(elemId).addClass('gread-like-active');
    }
}
