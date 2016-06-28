import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({

    // session: Ember.inject.service('session'),
    // firebase: Ember.inject.service('firebase'),

    didInsertElement() {
        //  初始化firebase对象
        firebase.initializeApp(config.firebase);

        //表单校验
        Ember.$("#login-modal-form").validate({
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
            let email = this.get('email');
            // let password = this.get('password');
            var password = md5(this.get('password')); //加密
            firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
                let userId = data.uid;
                sessionStorage.setItem("__LOGIN_USER_EMAIL__", data.email);
                sessionStorage.setItem("__LOGIN_USER_ID__", userId);
                // 查询出当前用户的默认分类
                this.store.query('project', { userId: userId, projStatus: 1, isDefaultProj: true }).then((proj) => {

                    proj.forEach((item) => {
                        if (item.get('userId') === userId  
                            && !!item.get('isDefaultProj')
                            && item.get('projStatus') === 1) {
                            //设置默认分类id到session
                            sessionStorage.setItem("__DEFAULT_PROJECT_ID__", item.get('id'));
                        }
                    });
                });

                // 强制刷新页面
                location.reload();
            }, (err) => {
                if (err.code === "auth/user-disabled") {
                    this.set('errorMsg', "用户被禁用了，请联系管理员！");
                } else if (err.code === "auth/invalid-email") {
                    this.set('errorMsg', "邮箱格式不正确！");
                } else if (err.code === "auth/user-not-found") {
                    this.set('errorMsg', "登录用户不存在，请先注册再登录！");
                } else if (err.code === "auth/wrong-password") {
                    this.set('errorMsg', "密码错误！");
                } else {
                    this.set('errorMsg', "服务器异常，正在维护中……！");
                }

            });
        }  // end login


            //
            // // 密码加密
            // var pwd = hex_sha1(this.get('password'));
            // // GET to /users?email=tomster@example.com&filter[password]=xxx
            // this.store.queryRecord('user', { email: this.get('email'), password: pwd }).then(function(users) {
            //     return users.get('firstObject');  //返回第一个记录（正常情况查询只返回一个）
            // }).then((user) => {
            //
            //     if (user) {
            //         let email = user.get('email');
            //         Ember.Logger.debug("登录用户：" + email);
            //         // 保存登录用户到session中
            //         sessionStorage.setItem("__LOGIN_USER_NICKNAME__",user.get('nickname'));
            //         sessionStorage.setItem("__LOGIN_USER_EMAIL__", email);
            //         sessionStorage.setItem("__LOGIN_USER_ID__",user.get('id'));
            //         // Ember.$("#login-modal-win").modal('toggle');
            //         // location.href = "/#/pc";
            //         // 强制刷新页面
            //         location.reload();
            //     } else {
            //         this.set('errorMsg', "登录失败，请确认用户名和密码后再登录。");
            //     }
            // });
            // console.log('pwd === ' + pwd);
            // // $.post(URL,data,callback);
            // $.post('http://localhost:3000/login', { email: this.get('email'), password: pwd}, function(data) {
            //     console.log('data= ... ' + data);
            // });
    } // end actions
});
