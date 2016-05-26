import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
<<<<<<< HEAD
    	Ember.Logger.info("params == " + params.todo_id);
=======
>>>>>>> b9e7347ab8469f935fae0e357f4e970655a0837d
        return this.store.findRecord('todo-item', params.todo_id);
    }
});
