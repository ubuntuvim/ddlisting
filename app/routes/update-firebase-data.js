import Ember from 'ember';

// 更新旧数据
export default Ember.Route.extend({

	model() {
		// 更新project和todo-item的关联关系
		return this.store.findAll('todo-item');
	},
	actions: {
		update() {
			console.log("button...............");
			// 更新project和todo-item的关联关系
			let todos = this.store.findAll('todo-item');
			let projects = this.store.findAll('project');
			console.log('todos == ' + todos);
			console.log('projects == ' + projects);
			todos.then((tds) => {
				tds.forEach((item) => {
					console.log("------------todos-------------");

					if (item.get('project') === 'myTodos' 
						|| item.get('project') === 'ZiRenWuCeShi'
						|| item.get('project') === '-KHs2s4761rphE5wPfr2'
						|| item.get('project') === 'CeShiShanChu') {
						console.log(item.get('title') + ",  " + item.get('user'));
						item.set('project', '-K7I7tTkqTQnxlr33w61');
						item.save();
					}

					//更新project字段，把原来的Pro就Code改为project的id，并在todo-item对象中增加一个属性userId
					// projects.then((projs) => {
					// 	projs.forEach((proj) => {
					// 		console.log("-------------projects------------" + (item.get('user') === proj.get('userId')));
					// 		if (item.get('user') === proj.get('userId')) { //同一个用户
					// 			console.log("item.get('project') == " + item.get('project'));
					// 			console.log("proj.get('projCode') == " + proj.get('projCode'));
					// 			if (item.get('project') === proj.get('projCode')) {
					// 				item.set('project', proj.get('id'));
					// 				item.set('userId', item.get('user'));
					// 				console.log("-------------save------------");
					// 				item.save();
					// 			}
					// 		}
					// 	});
					// });

					// 全部todo增加一个userId
					// item.set('userId', item.get('user'));
					// item.save();


					// 32da5e53-f8cb-4cc7-8da3-cad624f209a0  
					// if (item.get('user') === '32da5e53-f8cb-4cc7-8da3-cad624f209a0') {
					// 	item.set('project', '-KHs2s4761rphE5wPfr2');
					// 	item.set('userId', '32da5e53-f8cb-4cc7-8da3-cad624f209a0');
					// 	console.log("-------------save------------");
					// 	item.save();
					// }

					// if (item.get('user') === '3d2567da-6bf6-4773-a456-9c39856e3338') {
					// 	item.set('project', '-K75IpkGo7TLz0TwnYt1');
					// 	item.set('userId', '3d2567da-6bf6-4773-a456-9c39856e3338');
					// 	console.log("-------------save------------");
					// 	item.save();
					// }

				});
				
			});
		}
	}
});
