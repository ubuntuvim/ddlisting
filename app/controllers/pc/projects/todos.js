// app/controllers/pc/projects/todos.js
import Ember from 'ember';

export default Ember.Controller.extend({
    // 查询实现：检测模板输入值传递到controller。再通过controller传递到组件类中，
    // 在组件类中使用helper过滤
    queryTodoValue: '',
    queryTodoValueCpt: Ember.computed('queryTodoValue', function() {
        return this.get('queryTodoValue');
    }),
});
