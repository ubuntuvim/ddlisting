/**
* 上传用户头像
* @Author: ubuntuvim
* @Date:   2016-07-07T00:53:49+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-07T01:47:32+08:00
*/
import Ember from 'ember';
import layout from '../../templates/components/pc/profile-img-upload';
export default Ember.Component.extend({
  layout,
  classNameBindings: [`active`],
  active: Ember.computed(`fileUrl`, function() {
      return !!this.get(`fileUrl`);
  }),

  transfer: Ember.inject.service(`profile-upload`),
  store: Ember.inject.service('store'),

  click(ev) {
      ev.preventDefault();

      this.$(`input`).click();
  },

  getFileFromInput() {
      Ember.Logger.debug('开始上传头像……');
    Ember.$("#uploadProfileImgLoading").show();
    Ember.$("#uploadProfileImgLoadingText").hide();
    // 获取file这个输入框
    const file = this.$(`input`).get(0).files[0];
    const { upload, deserializeResponse, requestError, destroyImage} = this.get(`transfer`);
    const oldFile = this.get(`fileUrl`);

    if (file && file.type.indexOf(`image`) > -1) {
      if (destroyImage && oldFile) {
        destroyImage(this.get(`fileUrl`));
      }

      Ember.RSVP.resolve(upload(file)).then((response) => {
        const url = deserializeResponse(response);
        // this.onchange(url);
        // 保存用户头像
        var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        this.get('store').findRecord('user', userId).then((user) => {
            user.set('userProfile', url);
            user.save().then(() => {
                Ember.$("#uploadProfileImgLoading").hide();
                Ember.$("#uploadProfileImgLoadingText").show();
            });
        });

      }, (err) => {
        if (requestError) {
          requestError(err);
        }
      });
    }
  },

  stopPropagation(ev) {
    ev.stopPropagation();
  }
});
