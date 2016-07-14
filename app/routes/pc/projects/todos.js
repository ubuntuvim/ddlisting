/**
* @Author: ubuntuvim
* @Date:   2016-06-28T21:08:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T13:17:05+08:00
*/



// app/routes/pc/projects/todos.js

import Ember from 'ember';

export default Ember.Route.extend({

    // categoryCtrl: Ember.inject.controller('category'),
    redirect(model, transition) {
        // 判断用户是否登录了，没有登录不允许进入
        if (!sessionStorage.getItem("__LOGIN_USER_ID__")) {
            this.transitionTo('help');
        }
    },
    //  根据左侧选择的类型过滤数据
    // 排序放在 app/controllers/projects/todos.js
    model: function(params) {
        let projectId = params.project_id;

        Ember.Logger.debug("进入路由todos，project类型为：" + projectId);
        // let tds = this.store.peekRecord('project', projectId).get('todoItems');
        // this.store.findAll('project');
        return Ember.RSVP.hash({
            // 通过关联获取project下的todo
            // todos: this.store.peekRecord('project', projectId).get('todoItems'),
            project: this.store.peekRecord('project', projectId),
            projectId: projectId
        });
    }
});
