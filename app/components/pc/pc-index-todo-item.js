/**
* 清单广场页面，单个任务组件  app/components/pc/pc-idnex-todo-item.js
* @Author: ubuntuvim
* @Date:   2016-07-19T20:17:40+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-04T01:16:46+08:00
*/
import Ember from 'ember';
import getUserId from '../../utils/get-user-id';

export default Ember.Component.extend({

    userId: getUserId(),

    actions: {
        
    }
});
