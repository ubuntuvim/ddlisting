import Ember from 'ember';

export default Ember.Component.extend({
    //校验
    projNameValidate: Ember.computed.notEmpty('projName'),

    actions: {
        saveCategory() {
            // var inputStyle = Ember.$("#addCategoryForm .modal-dialog .modal-content .modal-body .form-group");
            // inputStyle.removeClass('has-error');
            var projName = this.get('projName');
            console.log("projName --- " + projName);
            if (projName) {
                var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
                Ember.Logger.debug("保存category userId: " + userId);
                if (!userId) {
                    location.reload(); //获取不到userid退出，让用户再次登录
                }
                // let user = this.store.peekRecord('user', userId);
                var project = this.store.createRecord("project", {
                    userId: userId,
                    projName: projName,
                    timestamp: new Date().getTime(),  //项目创建时间
                    projStatus: 1  // 项目状态：1-正常；2-删除；3-过期
                });
                project.save();  //保存
                this.set('projName', '');  //清空
                //关闭窗口
                Ember.$("#newCategoryId").modal('toggle');
            } else {
                // 提示不允许为空
                // inputStyle.addClass('has-error');
            }
        }
    }
});
