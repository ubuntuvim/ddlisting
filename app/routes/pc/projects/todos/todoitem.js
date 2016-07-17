/**
* todo详细设置页面  app/routes/todoitem.js
* @Author: ubuntuvim
* @Date:   2016-06-28T21:08:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-17T16:44:14+08:00
*/
import Ember from 'ember';
import getUserId from '../../../../utils/get-user-id';

export default Ember.Route.extend({
    redirect(model, transition) {
        // 判断用户是否登录了，没有登录不允许进入
        if (!getUserId()) {
            this.transitionTo('help');
        }
    },
    model: function(params) {
        return this.store.findRecord('todo-item', params.todo_id);
    }

});
