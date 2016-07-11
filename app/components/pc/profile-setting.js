/**
* 个人设置页面  profile-setting.sj
* @Author: ubuntuvim
* @Date:   2016-07-03T15:54:11+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-12T01:42:24+08:00
*/
import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        //表单校验
        Ember.$("#resetPasswordForm").validate({
            errorClass: 'validate-error',
            rules: {
                newPwd: {
                  required: true,
                  minlength: 6,
                  maxlength: 16
                },
                comNewPwd: {
                    required: true,
                    // minlength: 6,  //必须要跟newPwd一致，所以这里不需要验证长度了
                    // maxlength: 16,
                    equalTo: "#newPwd"
                }
            },
            messages: {
                newPwd: {
                    required: "请输入密码",
                    minlength: "密码长度不少于6位",
                    maxlength: "密码长度不能超过16位"
                },
                comNewPwd: {
                    required: "请输入密码",
                    // minlength: "密码长度不少于6位",
                    // maxlength: "密码长度不能超过16位",
                    equalTo: "两次输入密码不一致不一致"
                }
            }
        });
    },

    actions: {
        // 重置消息邮件通知设置
        resetEmailNotification(id, checked) {
            this.store.findRecord('profile', id).then((p) => {
                if (checked) {
                    p.set('isOpenEmailNotification', false);
                } else {
                    p.set('isOpenEmailNotification', true);
                }
                p.save();
            });
        },
        // 重置提示音设置
        resetPromptTone(id, checked) {
            this.store.findRecord('profile', id).then((p) => {
                if (checked) {
                    p.set('isOpenPromptTone', false);
                } else {
                    p.set('isOpenPromptTone', true);
                }
                p.save();
            });
        },
        resetPassword(userId) {
            console.log('userId = ' + userId);
            console.log(this.get('model.user.password'));
            this.store.findRecord('user', userId).then((user) => {
                user.set('password', hex_sha1(this.get('model.user.password')));
                user.save().then(() => {
                    this.set('msg', "修改成功。");
                    //清空输入框
                    Ember.$("#newPwd").val('');
                    Ember.$("#comNewPwd").val('');
                    setTimeout(function() {
                        Ember.$("#tipInfoId").html("");
                    }, 3000);
                }, (err) => {
                    Ember.Logger.debug("修改失败: " + err)
                    this.set('msg', "修改失败，请刷新页面后重试。");
                });
            });
        },
        logout() {
            sessionStorage.removeItem("__LOGIN_USER_ID__");
            // 强制刷新页面
            location.reload();
        },
        updateNickname(id) {
            this.store.findRecord('user', id).then((u) => {
                u.set('nickname',this.get('model.user.nickname'));
                u.save();
            });
        }
    }

    // isOpenEmailNotification: Ember.computed(function() {
    //     return this.get('model.user.profile.isOpenEmailNotification');
    // }),
    //
    // isOpenPromptTone: Ember.computed(function() {
    //     return this.get('model.user.profile.isOpenPromptTone');
    // })
});
