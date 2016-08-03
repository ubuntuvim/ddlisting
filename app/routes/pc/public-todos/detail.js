/**
* 公开todo详细信息 app/routes/pc/publicTodos/detail.js
* @Author: ubuntuvim
* @Date:   2016-08-04T01:03:24+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-04T02:02:03+08:00
*/
import Ember from 'ember';
import getUserId from '../../../utils/get-user-id';

export default Ember.Route.extend({
    model(params) {
        // console.log('route:detail.js params.todo_id = ' + params.todo_id);
        // let userId = getUserId();
        // let user = this.store.findRecord('user', userId);
        // let todo = this.store.findRecord('todo-item', params.todo_id);
        // console.log('todo titile = ' + todo.get('title'));
        // return Ember.RSVP.hash({
        //     user: user,
        //     todo: todo
        // });
        return this.store.findRecord('todo-item', params.todo_id);
    }
});
