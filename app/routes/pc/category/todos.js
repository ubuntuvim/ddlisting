import Ember from 'ember';

export default Ember.Route.extend({
    redirect(model, transition) {
        // 判断用户是否登录了，没有登录不允许进入
        if (!sessionStorage.getItem("__LOGIN_USER_ID__")) {
            this.transitionTo('pc');
        }
    },
    //  根据左侧选择的类型过滤数据
    model: function(params) {

        var project = params.category_id;
        if (!Ember.computed.empty(project)) {
            project = "myTodos";
        }

        var retArr = [];
        this.store.query('todo-item', {}).then(function(td) {
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
