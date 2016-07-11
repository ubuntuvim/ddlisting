/**
* 顶层路由，初始化加载所有的users、projects、todos、bgImgList
* 加载之后项目后面都可以不需要重新发请求，直接使用 peekRecord 获取
* @Author: ubuntuvim
* @Date:   2016-05-26T22:15:56+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-12T01:55:30+08:00
*/
import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            // 不会在模板中获取这个数据，这里只是为了查询一次数据，是的后面再使用project的时候可以从缓存中获取
            // 否则手动刷新后页面不显示数据
            users: this.store.findAll('user'),
            projects: this.store.findAll('project'),
            profiles: this.store.findAll('profile'),
            todos: this.store.findAll('todo-item')
            // ,
            // user: this.store.peekRecord('user', sessionStorage.getItem("__LOGIN_USER_ID__"))
        });
    }
});
