// app/components/todo-list-page.js

import Ember from 'ember';

export default Ember.Component.extend({
	
	allTodos: Ember.computed(function() {
        return this.store.findAll('todo-item');
    }),
    todos: Ember.computed('allTodos.@each.user', 
        'allTodos.@each.recordStatus', 
        'allTodos.@each.project', function() {
        
        let userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        let project = Ember.$("#projecId").val();
        console.log("project ----> " + project);
        return this.get('allTodos').filter(function(td) {
            return td.get('user') === userId 
            	&& td.get('project') === project 
            	&& (td.get('recordStatus') === 1 || td.get('recordStatus') === 2);
        });
    })
});
