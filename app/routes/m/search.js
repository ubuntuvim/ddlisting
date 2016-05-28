import Ember from 'ember';

export default Ember.Route.extend({
    //  根据左侧选择的类型过滤数据
    model: function(params) {

        var project = params.category_id;

        Ember.Logger.info("m search ==> project ===> todos ==>" + project);

        if (!Ember.computed.empty(project)) {
            project = "myTodos";
        }

        var retArr = [];
        this.store.query('todo-item', { project: project }).then(function(td) {
        	//debugger;
		  	td.forEach(function(item) {
		  		if (item.get('project') === project) {
		  			retArr.pushObject(item);
                }
		  	});
		});

		return retArr;
    }
});
