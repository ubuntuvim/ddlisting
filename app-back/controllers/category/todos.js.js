import Ember from 'ember';

export default Ember.Controller.extend({
    todos: Ember.computed(function() {
        return this.store.findAll('todo-item');
  	}),

    todoListByProjCode: Ember.computed('todos.@each.project', function() {
        var project = this.get('todo_id');
        console.log('project = ' + project);
        return this.get('todos').filterBy('project', project);
    })

});
