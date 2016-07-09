/**
* @Author: ubuntuvim
* @Date:   2016-05-27T00:48:14+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T13:45:27+08:00
*/



// app/routes/pc.js
import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            loginUser: sessionStorage.getItem("__LOGIN_USER_ID__"),
            users: this.store.findAll('user'),
            defaultProjectId: sessionStorage.getItem('__DEFAULT_PROJECT_ID__'),
            // 不会在模板中获取这个数据，这里只是为了查询一次数据，是的后面再使用project的时候可以从缓存中获取
            // 否则手动刷新后页面不显示数据
            projects: this.store.findAll('project'),
            todos: this.store.findAll('todo-item')
        });
    }
});
