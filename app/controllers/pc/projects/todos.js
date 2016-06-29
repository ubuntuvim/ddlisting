// app/controllers/pc/projects/todos.js
import Ember from 'ember';

export default Ember.Controller.extend({
    // 查询实现：检测模板输入值传递到controller。再通过controller传递到组件类中，
    // 在组件类中使用helper过滤
    queryTodoValue: '',
    queryTodoValueCpt: Ember.computed('queryTodoValue', function() {
        return this.get('queryTodoValue');
    }),
    // 多重过滤：1，状态为1；2，登录用户id；3，所属分类；4，不显示子todo
    completedCount: Ember.computed('todosForTotla.@each.userId',
                                        'todosForTotla.@each.recordStatus',
                                        'todosForTotla.@each.project',
                                        'todosForTotla.@each.isChildOrParent', 'model', function() {

        // var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        // var projectId = this.get('projectId');  //调用组件时候传递过来
        //
        // return this.get('todosForTotla').filter(function(td) {
        //     return td.get('userId') === userId
        //             && td.get('recordStatus') === 1
        //             && td.get('project').get('id') === projectId
        //             && td.get('isChildOrParent') === 3;
        // }).get('length');
        return 10;
    })
});
