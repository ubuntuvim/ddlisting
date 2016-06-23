// app/components/edit-category.js
import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        // 编辑分类
        editCategory() {
            var projId = Ember.$("#projId1").val();
            var projName = Ember.$("#projNameId1").val();
            if (projId) {
                this.store.findRecord('project', projId).then(function(proj) {
                  proj.set('projName', projName);
                  proj.save();
                });
                Ember.$("#editCategoryId").modal('toggle');
            }
        },
        // TODO 还没加上权限
        delCategory() {
            // 获取删除数据的id
            var id = Ember.$("#projId1").val();
            //  首先删除与此项目关联的所有TODO
            this.store.findRecord('project', id).then((proj) => {
                // var userId = this.getUserIdFromSession();
                //
                // console.log('userId = ', userId);

                this.store.peekAll("todo-item").filter(function(td) {
                    // td.get('user') === userId &&
                    if (td.get('recordstatus') === 1 || td.get('recordstatus') === 2) {
                        //  设置为删除状态
                        td.set('recordstatus', 3);
                        td.save();
                    }
                });
                // 删除分类
                // proj.destroyRecord();
                // proj.deleteRecord();
                // proj.get('isDeleted'); // => true
                // proj.save(); // => DELETE to /posts/1
                // 修改状态，并不直接删除
                catg.set('projStatus', 2);
                catg.save();
            });

            //  关闭modal弹出窗口
            Ember.$('#editCategoryId').modal('toggle');
        }
    }
});
