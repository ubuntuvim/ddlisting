import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
    
    //  根据左侧选择的类型过滤数据
    model: function(params) {

        var project = params.category_id;
        if (!Ember.computed.empty(project)) {
            project = "myTodos";
        }

        var retArr = [];
        this.store.query('todo-item', {}).then(function(td) {
        	//debugger;
		  	td.forEach(function(item, index) {
		  		if (item.get('project') === project)
		  			retArr.pushObject(item);
		  	});
		});

		return retArr;
    }
=======
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
>>>>>>> b9e7347ab8469f935fae0e357f4e970655a0837d
});
