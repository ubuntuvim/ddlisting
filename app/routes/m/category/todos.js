import Ember from 'ember';

export default Ember.Route.extend({

    //  根据左侧选择的类型过滤数据
    model: function(params) {

        var project = params.category_id;

        Ember.Logger.info("m category ==> project ===> todos ==>" + project);

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
    // ,
    // renderTemplate: function(){
        // this._super(this, arguments); // Run the default renderTemplate logic
        // this.render({
        //     into: 'm',  //必须是父模板
        //     outlet: 'category'
        // });
    // }

});
