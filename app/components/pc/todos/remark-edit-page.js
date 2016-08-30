/**
* 修改备注信息
* @Author: ubuntuvim
* @Date:   2016-08-30T02:08:55+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-30T23:31:46+08:00
*/
import Ember from 'ember';

export default Ember.Component.extend({

    didRender() {
        // 给图片加bootstrap样式
        this.$(".show-remark-info-in-edit-page").find("img").addClass('img-responsive');
    },
    actions: {
        updateRemark() {
            let id = Ember.$("#remarkEdit_todoId").val();
            let remark = Ember.$("#todoitmeRemardEditid").val();
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('remark', remark);
                td.save();
            });
        }
    }
});
