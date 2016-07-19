/**
* 重置背景图片  app/components/pc/change-background-img.js
* @Author: ubuntuvim
* @Date:   2016-07-04T21:28:54+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-09T16:52:07+08:00
*/
import Ember from 'ember';
import getUserId from '../../utils/get-user-id';

export default Ember.Component.extend({
    actions: {
        // 重置背景图片
        resetBgImg(url, id) {
            let ids = "#" + id;
            let spanIds = "#span" + id;
            let profile = this.store.peekRecord('user', getUserId()).get('profile');
            if (profile) {
                this.store.findRecord('profile', profile.get('id')).then((prof) => {
                    prof.set('bgImg', url);
                    prof.save().then(() => {
                        //设置选中状态
                        Ember.$("#changeBackground .modal-dialog .modal-content .modal-body .row a").each(function() {
                            Ember.$(this).removeClass('active');
                        });
                        Ember.$(ids).addClass('active');
                        // 设置钩钩
                        Ember.$("#changeBackground .modal-dialog .modal-content .modal-body .row .glyphicon-ok").each(function() {
                            Ember.$(this).hide();
                        });
                        Ember.$(spanIds).show();
                    });
                });
            }
        }
    }
});
