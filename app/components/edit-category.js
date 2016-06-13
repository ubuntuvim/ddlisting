import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        editCategory() {
            var catgId = Ember.$("#catgId1").val();
            var catgName = Ember.$("#catgName1").val();
            if (catgId) {
                this.store.findRecord('category', catgId).then(function(catg) {
                  catg.set('catgname', catgName);
                  catg.save();
                });
                Ember.$("#editCategoryId").modal('toggle');
            }
        },
        // TODO 还没加上权限
        delCategory() {
            // 获取删除数据的id
            var id = Ember.$("#catgId1").val();
            //  首先删除与此项目关联的所有TODO
            this.store.findRecord('category', id).then((catg) => {
                // var userId = this.getUserIdFromSession();
                //
                // console.log('userId = ', userId);

                var todos = this.store.peekAll("todo-item").filter(function(td) {
                    // td.get('user') === userId &&
                    if ((td.get('recordstatus') === 1
                            || td.get('recordstatus') === 2)) {
                        //  设置为删除状态
                        td.set('recordstatus', 3);
                        td.save();
                    }
                });
                // 删除分类
                // catg.destroyRecord();
                // catg.deleteRecord();
                // catg.get('isDeleted'); // => true
                // catg.save(); // => DELETE to /posts/1
                // 修改状态，并不直接删除
                catg.set('catgstatus', 2);
                catg.save();
            });

            //  关闭modal弹出窗口
            Ember.$('#editCategoryId').modal('toggle');
        }
    }
});
