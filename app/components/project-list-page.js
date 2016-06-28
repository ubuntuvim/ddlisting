// app/components/project-list-page.js
import Ember from 'ember';

// 左侧项目分类列表
export default Ember.Component.extend({
	allProject: Ember.computed(function() {
        return this.store.findAll('project');
    }),
    projects: Ember.computed('allProject.@each.userId',
        					'allProject.@each.projStatus', function() {
        
        // console.log("this.get('allTodos') --- " + this.get('allTodos'));
        let userId = sessionStorage.getItem("__LOGIN_USER_ID__");

        return this.get('allProject').filter(function(p) {
            return (p.get('userId') === userId)
                && (p.get('projStatus') === 1);
        });
    })

});
