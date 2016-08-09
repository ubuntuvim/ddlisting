/**
* 顶层路由，初始化加载所有的users、projects、todos、bgImgList
* 加载之后项目后面都可以不需要重新发请求，直接使用 peekRecord 获取
* @Author: ubuntuvim
* @Date:   2016-05-26T22:15:56+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-10T01:56:04+08:00
*/
import Ember from 'ember';

export default Ember.Route.extend({

    // redirect(model, transition) {
    //     this.transitionTo('pc.publicTodos');
    // },

    beforeModel() {
        let hostname = "http://" + window.location.host + "/";
        // 首次访问时候判断是手机还是PC端分别进入不同的处理页面
        if (hostname == window.location.href || (hostname + "#/") == window.location.href) {  //当前窗口的URL与首页一致（http://localhost:4200)
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                Ember.Logger.debug("移动设备");
                this.transitionTo('m.projects');
            } else {
                Ember.Logger.debug("PC端");
                this.transitionTo('pc.publicTodos');
            }
        } else {  //如果已经进入到某个路由，并且手动刷新页面则进入到刷新时候的页面
            // window.location.href获取到当前窗口的URL
            location.href = window.location.href;
        }
    },

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
