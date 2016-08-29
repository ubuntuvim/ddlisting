/**
* 新建project app/components/pc/new-project.js
* @Author: ubuntuvim
* @Date:   2016-06-25T00:24:36+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T14:08:51+08:00
*/
import Ember from 'ember';
import getUserId from '../../../utils/get-user-id';

export default Ember.Component.extend({
    //校验
    projNameValidate: Ember.computed.notEmpty('projName'),

    actions: {
        saveCategory() {
            // 显示loading图片
            Ember.$("#loginLoading").show();
            // 按钮变为不可用
            Ember.$("#submitBtn").attr('disabled', true);
            // var inputStyle = Ember.$("#addCategoryForm .modal-dialog .modal-content .modal-body .form-group");
            // inputStyle.removeClass('has-error');
            var projName = this.get('projName');
            // console.log("projName --- " + projName);
            if (projName) {
                var userId = getUserId();
                let user = this.store.peekRecord('user', userId);
                var project = this.store.createRecord("project", {
                    userId: userId,
                    projName: projName,
                    timestamp: new Date().getTime(),  //项目创建时间
                    projStatus: 1  // 项目状态：1-正常；2-删除；3-过期
                    // user: user
                });
                // 设置与user的关联关系
                user.get('projects').pushObject(project);
                project.save().then(() => {
                    user.save().then(() => {
                        this.set('projName', '');  //清空
                        //关闭窗口
                        Ember.$("#newCategoryId").modal('toggle');
                        // 隐藏loading图片
                        Ember.$("#loginLoading").hide();
                        // 按钮变为可用
                        Ember.$("#submitBtn").attr('disabled', false);
                        this.store.findRecord('user', getUserId()).then((u) => {
                            u.set('myIntegral', (u.get('myIntegral')+5));  //创建分类积分加5
                            u.save();
                        });
                    });
                });

            } else {
                // 提示不允许为空
                // inputStyle.addClass('has-error');
                // 隐藏loading图片
                Ember.$("#loginLoading").hide();
                // 按钮变为可用
                Ember.$("#submitBtn").attr('disabled', false);
            }
        }
    }
});
