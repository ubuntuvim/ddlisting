/**
* 设置todo的star状态 app/utils/set-star-status.js
* @Author: ubuntuvim
* @Date:   2016-07-03T13:03:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-19T21:21:48+08:00
*/

import Ember from 'ember';
import getUserId from '../utils/get-user-id';

// 设置todo的star状态
export default function setStarStatus(id, star, store) {

    let ids = "#"+id;
    Ember.$(ids).hide();

    store.findRecord('todo-item', id).then((td) => {
        let jf = 0;
        if (star) {
            td.set('star', false);
            jf = -1;
        } else {
            td.set('star', true);
            jf = 1;
        }
        // 更新创建时间
        // td.set('timestamp', new Date().getTime());
        td.save().then(() => {
            // star todo积分加1
            store.findRecord('user', getUserId()).then((u) => {
                u.set('myIntegral', (u.get('myIntegral')+jf));
                u.save();
            });
        });
    });
    Ember.$(ids).slideDown();
}
