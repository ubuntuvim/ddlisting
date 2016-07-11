/**
* 背景图片上传app/routes/bg-img-libs.js
* @Author: ubuntuvim
* @Date:   2016-07-07T21:59:20+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T16:17:04+08:00
*/

import Ember from 'ember';

// 设置app的背景图片库
export default Ember.Route.extend({

    beforeModel() {
        if (sessionStorage.getItem('__ADMIN_TOKEN__')) {
            this.transitionTo('admin.login');
        }
    },
    model() {
        return this.store.findAll('bg-img-libs');
    },
    actions: {
        addBgImg() {
            //显示编辑框，同样是使用新增的输入框
            Ember.$("#newBgImg").modal('toggle');
            Ember.$("#imgId").val('');
            Ember.$("#imgTitle").val('');
            Ember.$("#uploadLoading").hide();
            Ember.$("#uploadLoadingText").hide();
            // 清空文件上传框
            Ember.$("#bgImgFile1").after(Ember.$("#bgImgFile1").clone().val(""));
            Ember.$("#bgImgFile1").remove();
            Ember.$("#bgImgFile2").after(Ember.$("#bgImgFile2").clone().val(""));
            Ember.$("#bgImgFile2").remove();
            Ember.$("#bgImgFile3").after(Ember.$("#bgImgFile3").clone().val(""));
            Ember.$("#bgImgFile3").remove();
        },
        edit(id) {
            //显示编辑框，同样是使用新增的输入框
            Ember.$("#newBgImg").modal('toggle');
            let bgImg = this.store.peekRecord('bg-img-libs', id);
            Ember.$("#imgId").val(bgImg.get('id'));
            Ember.$("#imgTitle").val(bgImg.get('imgTitle'));
        }
    }
});
