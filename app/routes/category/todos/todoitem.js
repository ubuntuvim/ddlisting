import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        
    	Ember.Logger.info("params == " + params.todo_id);

        // return this.store.findRecord('todo-item', params.todo_id);
    }
});
