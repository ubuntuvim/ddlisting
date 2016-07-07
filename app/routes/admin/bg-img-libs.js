// app/routes/bg-img-libs.js
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
            Ember.$("#imgId").val();
            Ember.$("#imgTitle").val();
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
