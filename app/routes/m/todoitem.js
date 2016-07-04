// app/routes/m/todoiem.js

import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        Ember.Logger.info("进入todo详细页面 ==> m > todoitem" + params.todo_id);
        return this.store.findRecord('todo-item', params.todo_id);
    }
});
