import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        //表单校验
        $("#register-modal-form").validate({
            errorClass: 'validate-error',
          rules: {
            registerEmail: {
                  required: true,
                  email: true
              },
            registerPassword: {
              required: true,
              minlength: 6,
              maxlength: 16
            },
    	    registerPassword2: {
    		    required: true,
    		    minlength: 6,
    		    equalTo: "#registerPassword"
    	    }
          },
          messages: {
            registerEmail: {
                required: "请输入邮箱地址",
                email: "请输入正确的邮箱地址"
            },
            registerPassword: {
              required: "请输入密码",
              minlength: "密码长度不少于6位",
              maxlength: "密码长度不能超过16位"
            },
    	    registerPassword2: {
    		    required: "请输入确认密码",
    		    minlength: "确认密码不能小于6个字符",
    		    equalTo: "两次输入密码不一致不一致"
    	    }
          }
        });
    },
    actions: {
        register() {
            // 校验注册用户是否已经存在
            var email = this.get('email');
            this.store.queryRecord('user', { email: email}).then(function(users) {
                return users.get('firstObject');  //返回第一个记录（正常情况查询只返回一个）
            }).then((user) => {
                if (user) {
                    this.set('errorMsg', "此邮箱已经被注册，请换一个邮箱注册。");
                } else {
                    var user = this.store.createRecord('user', {
                        email: email,
                        password: hex_sha1(this.get('password')),// 密码加密
                        createDate: new Date().getTime(),
                        status: 1,  //用户状态，1-正常；0-删除；
                        userGrade: 1  //暂时还没有用到
                    }).save().then((user) => {
                        sessionStorage.setItem("__LOGIN_USER_NICKNAME__",user.get('nickname'));
                        sessionStorage.setItem("__LOGIN_USER_EMAIL__",user.get('email'));
                        sessionStorage.setItem("__LOGIN_USER_ID__",user.get('id'));
                        // 强制刷新页面
                        location.reload();
                    });
                }
            });

        }
    }

});
