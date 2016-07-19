/**
* 分类列表   app/components/project-list-page.js
* @Author: ubuntuvim
* @Date:   2016-06-28T21:08:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-17T23:39:41+08:00
*/

import Ember from 'ember';
import getUserId from '../../utils/get-user-id';

// 左侧项目分类列表
export default Ember.Component.extend({
	didInsertElement() {
        // Ember.$("#appMainLeftId .panel .panel-body .list-group").css("height", $(window).width());
	},
	allProject: Ember.computed(function() {
        return this.store.findAll('project');
    }),
    projects: Ember.computed('allProject.@each.userId',
        					'allProject.@each.projStatus', function() {

        // console.log("this.get('allTodos') --- " + this.get('allTodos'));
        // let userId = sessionStorage.getItem("__LOGIN_USER_ID__");

        return this.get('allProject').filter(function(p) {
            return (p.get('userId') === getUserId())
                && (p.get('projStatus') === 1);
        });
    })

});
