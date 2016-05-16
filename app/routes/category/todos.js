import Ember from 'ember';

export default Ember.Route.extend({
    // todos: Ember.computed(function() {
    //     return this.store.peekAll('todo-item');
 //  	}),
    // model: function(params) {
    //     var project = params.todo_id;
    //     var _this = this;
    //     // return this.store.findRecord('todo-item', params.todo_id);
    //     return Ember.computed('todos.@each.project', function() {
    //         return _this.get('todos').filterBy('project', project);
    //     });
    // }
});
