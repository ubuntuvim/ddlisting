/**
* 编辑、删除project app/components/edit-category.js
* @Author: ubuntuvim
* @Date:   2016-06-29T21:13:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-19T21:25:38+08:00
*/
import Ember from 'ember';
import getUserId from '../../utils/get-user-id';

export default Ember.Component.extend({
    actions: {
        // 编辑分类
        editCategory() {
            // 显示loading图片
            // Ember.$("#loginLoading").show();
            // 按钮变为不可用
            Ember.$("#submitBtn2").attr('disabled', true);
            var projId = Ember.$("#projId1").val();
            var projName = Ember.$("#projNameId1").val();
            if (projId) {
                this.store.findRecord('project', projId).then((proj) => {
                  proj.set('projName', projName);
                  proj.save().then(() => {
                      // 隐藏loading图片
                    //   Ember.$("#loginLoading").hide();
                      // 按钮变为可用
                      Ember.$("#submitBtn2").attr('disabled', false);
                      Ember.$("#editCategoryId").modal('toggle');
                  });
                });

            }
        },
        // TODO 暂时不直接删除，只是设置为删除状态
        delCategory() {
            // 显示loading图片
            // Ember.$("#loginLoading").show();
            // 按钮变为不可用
            Ember.$("#delProjectBtn").attr('disabled', true);
            // 获取删除数据的id
            var id = Ember.$("#projId1").val();
            //  首先删除与此项目关联的所有TODO
            this.store.findRecord('project', id).then((proj) => {
                // var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
                proj.get('todoItems').forEach(function(item) {
                    item.set('recordStatus', 3);
                    item.save();
                });
                // 修改状态，并不直接删除
                proj.set('projStatus', 2);
                proj.save().then(() => {
                    // 隐藏loading图片
                    // Ember.$("#loginLoading").hide();
                    // 按钮变为可用
                    Ember.$("#delProjectBtn").attr('disabled', false);
                    Ember.$("#editCategoryId").modal('toggle');
                    this.store.findRecord('user', getUserId()).then((u) => {
                        u.set('myIntegral', (u.get('myIntegral')-4));  //创建分类积分-4
                        u.save();
                    });
                });
            });
        }
    }
});
