import Ember from 'ember';

export default Ember.Component.extend({
    //校验
    catgNameValidate: Ember.computed.notEmpty('catgName'),

    actions: {
        saveCategory() {
            // var inputStyle = Ember.$("#addCategoryForm .modal-dialog .modal-content .modal-body .form-group");
            // inputStyle.removeClass('has-error');
            var catgName = this.get('catgName');
            // console.log(this.get('catgName'));
            if (catgName) {
                // 时间加随机数作为分类编码
                // var catgCode = new Date().getTime() + Math.floor(Math.random()*100);
                var category = this.store.createRecord("category", {
                    userId: '', //暂时设置为空，还没实现登录
                    catgName: catgName,
                    // catgCode: catgCode,
                    timestamp: new Date().getTime(),  //项目创建时间
                    catgStatus: 1  // 项目状态：1-正常；2-删除；3-过期
                });
                category.save();  //保存
                this.set('catgName', '');  //清空
                //关闭窗口
                Ember.$("#newCategoryId").modal('toggle');
            } else {
                // 提示不允许为空
                // inputStyle.addClass('has-error');
            }
        }
    }
});
