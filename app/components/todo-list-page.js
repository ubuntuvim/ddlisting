// app/components/todo-list-page.js

import Ember from 'ember';

export default Ember.Component.extend({
	
    // projecId: Ember.computed(function() {
    //     return this.get('projecId');
    // }),

	allTodos: Ember.computed(function() {
        return this.store.findAll('todo-item');
    }),
    todos: Ember.computed('allTodos.@each.userId', 
        'allTodos.@each.recordStatus', 
        'allTodos.@each.project', function() {
        
        console.log("projectType --- " + this.get('projecId'));
        let userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        let project = this.get('projecId');
        Ember.Logger.debug("选择的项目："+project);
        return this.get('allTodos').filter(function(td) {
            // console.log(td.get('userId') + ", " + td.get('project') + ", " + td.get('recordStatus'));
            return td.get('userId') === userId 
            	&& td.get('project') === project 
            	&& (td.get('recordStatus') === 1 || td.get('recordStatus') === 2);
        });
    })
});
