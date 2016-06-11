import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        //表单校验
        $("#login-modal-form").validate({
            errorClass: 'validate-error',
          rules: {
            loginEmail: {
                  required: true,
                  email: true
              },
            loginPassword: {
              required: true,
              minlength: 6,
              maxlength: 16
            }
          },
          messages: {
            loginEmail: {
                required: "请输入邮箱地址",
                email: "请输入正确的邮箱地址"
            },
            loginPassword: {
              required: "请输入密码",
              minlength: "密码长度不少于6位",
              maxlength: "密码长度不能超过16位"
            }
          }
        });
    },

    actions: {
        login() {
            // 密码加密
            var pwd = hex_sha1(this.get('password'));
            // GET to /users?email=tomster@example.com&filter[password]=xxx
            this.store.queryRecord('user', { email: this.get('email'), password: pwd }).then(function(users) {
                return users.get('firstObject');  //返回第一个记录（正常情况查询只返回一个）
            }).then((user) => {

                if (user) {
                    let email = user.get('email');
                    Ember.Logger.debug("登录用户：" + email);
                    // 保存登录用户到session中
                    sessionStorage.setItem("__LOGIN_USER_NICKNAME__",user.get('nickname'));
                    sessionStorage.setItem("__LOGIN_USER_EMAIL__", email);
                    sessionStorage.setItem("__LOGIN_USER_ID__",user.get('id'));
                    // Ember.$("#login-modal-win").modal('toggle');
                    // location.href = "/#/pc";
                    // 强制刷新页面
                    location.reload();
                } else {
                    this.set('errorMsg', "登录失败，请确认用户名和密码后再登录。");
                }
            });
            // console.log('pwd === ' + pwd);
            // // $.post(URL,data,callback);
            // $.post('http://localhost:3000/login', { email: this.get('email'), password: pwd}, function(data) {
            //     console.log('data= ... ' + data);
            // });

        }
    }
});
