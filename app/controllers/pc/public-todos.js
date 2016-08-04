/**
* 接收清单广场页面顶部查询输入框查询值，并转到public-todos.hbs模板上，再传递到pc-index-todo-list-panel.js中过滤
* @Author: ubuntuvim
* @Date:   2016-08-05T02:22:01+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-05T02:37:58+08:00
*/
import Ember from 'ember';

export default Ember.Controller.extend({

    // 清单广场顶部查询框查询值
    queryPublicTodoValue:'',
    queryPublicTodoValueCmt: Ember.computed('queryPublicTodoValue', function() {
        return this.get('queryPublicTodoValue');
    })

});
