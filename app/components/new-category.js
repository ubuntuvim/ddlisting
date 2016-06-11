import Ember from 'ember';

export default Ember.Component.extend({
    //校验
    catgNameValidate: Ember.computed.notEmpty('catgname'),

    actions: {
        saveCategory() {
            // var inputStyle = Ember.$("#addCategoryForm .modal-dialog .modal-content .modal-body .form-group");
            // inputStyle.removeClass('has-error');
            var catgName = this.get('catgname');

            if (catgName) {
                var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
                Ember.Logger.debug("保存category userId: " + userId);
                if (!userId) {
                    location.reload(); //获取不到userid退出，让用户再次登录
                }
                let user = this.store.peekRecord('user', userId);
                var category = this.store.createRecord("category", {
                    userid: userId,
                    catgname: catgName,
                    user: user,
                    timestamp: new Date().getTime(),  //项目创建时间
                    catgstatus: 1  // 项目状态：1-正常；2-删除；3-过期
                });
                category.save();  //保存
                // this.store.findRecord('user', userId).then((uesr) => {
                //     console.log("user.get('categorys') == " + user.get('categorys'));
                //     user.get('categorys').pushObject(category);
                //     user.save();
                // });
                this.set('catgname', '');  //清空
                //关闭窗口
                Ember.$("#newCategoryId").modal('toggle');
            } else {
                // 提示不允许为空
                // inputStyle.addClass('has-error');
            }
        }
    }
});
