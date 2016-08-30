/**
* 查询任务信息
* @Author: ubuntuvim
* @Date:   2016-08-30T01:19:15+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-30T02:07:18+08:00
*/
import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.findRecord('todo-item', params.remark_todo_id);
    }
});
