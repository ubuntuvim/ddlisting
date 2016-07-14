/**
* 中间todo列表 app/components/todo-list-page.js
* @Author: ubuntuvim
* @Date:   2016-06-28T21:08:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-14T22:22:23+08:00
*/
import Ember from 'ember';

export default Ember.Component.extend({

	didUpdate() {
    },
    didInsertElement() {
        // Ember.$("#appMainRightId .todo-list .pc-main-completed-todo-list-tip").css('marginBottom', '100px');
        // Ember.$("#appMainRightId .todo-list .list-group:last").css('marginBottom', '100px');
        let ids = "#"+Ember.$("#selectedProjectType").val();
		Ember.Logger.debug("选中的分类ID为：" + ids);
        // Ember.$('#appMainLeftId .panel-body .list-group .pc-category-list-item-selector').each(function() {
        //     Ember.$(this).removeClass('pc-category-list-item-active');
        // });
        Ember.$(ids).addClass('pc-category-list-item-active');

    },

    // projecId: Ember.computed(function() {
    //     return this.get('projecId');
    // }),

	// allTodos: Ember.computed(function() {
    //     return this.store.findAll('todo-item');
    // }),
    // todos: Ember.computed('allTodos.@each.userId',
    //     'allTodos.@each.recordStatus',
    //     'allTodos.@each.project', function() {
	//
    //     let userId = sessionStorage.getItem("__LOGIN_USER_ID__");
    //     let project = this.get('projecId');
    //     Ember.Logger.debug("选择的项目："+project);
    //     return this.get('allTodos').filter(function(td) {
    //         return td.get('userId') === userId
    //         	&& td.get('project') === project
    //         	&& (td.get('recordStatus') === 1 || td.get('recordStatus') === 2);
    //     });
    // })

});
