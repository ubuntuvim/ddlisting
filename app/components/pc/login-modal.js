/**
* 用户登录，登录成功后用户ID设置到session中
* @Author: ubuntuvim
* @Date:   2016-06-28T21:08:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-17T15:15:53+08:00
*/
import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Component.extend({

    // session: Ember.inject.service('session'),
    // firebase: Ember.inject.service('firebase'),

    didInsertElement() {

        // firebase.initializeApp(config.APP.firebase);

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
        clearTipInfo() {
            this.set('errorMsg', "");
        },
        login() {
            //清空提示信息
            this.set('errorMsg', "");
            //显示loading
            Ember.$("#loginLoading").show();
            // 按钮不可用
            // Ember.$("#loginBtn").attr('disabled', true);

            let email = this.get('email');
            let password = hex_sha1(this.get('password')); //加密
            // 是否选择记住我
            let rememberme = Ember.$("#remembermeId").is(':checked');
            // console.log('rememberme ',rememberme);
            // 后续可能需要重新实现query方法，直接在query查询中过滤数据，而不遍历判断
            this.store.query('user', { email: email, password: password }).then(function(users) {
                let retUser = null;
                users.forEach((user) => {
                    if (email === user.get('email') && password === user.get('password')) {
                        retUser = user;
                    }
                });
                return retUser;
            }).then((user) => {
                if (user) {
                    //获取默认的分类
                    user.get('projects').forEach((item) => {
                        if (item.get('isDefaultProj')) {  //默认分类
                            // sessionStorage.setItem(config.APP.__LOGIN_USER_NICKNAME__, user.get('nickname'));
                            // sessionStorage.setItem(config.APP.__LOGIN_USER_EMAIL__, user.get('email'));
                            let userId = user.get('id');
                            Ember.Logger.debug("用户ID：" + userId);
                            sessionStorage.setItem(config.APP.__LOGIN_USER_ID__, userId);
                            // sessionStorage.setItem(config.APP.__DEFAULT_PROJECT_ID__, item.get('id'));
                            if (rememberme) {  //  记住我7天
                                // 存储一个带7天期限的 cookie
                                Ember.$.cookie(config.APP.__LOGIN_USER_ID__, userId, { expires: 7 });
                            }
                            // debugger;
                            // 强制刷新页面
                            // location.reload();
                            // 关闭modal
                            Ember.$("#login-modal-win").modal('toggle');
                            location.href = "/#/pc/publicTodos";
                        }
                    });

                } else {
                    this.set('errorMsg', "用户名或密码有误，请确认在登录。");
                    Ember.$("#loginLoading").hide();
                    Ember.$("#loginBtn").attr('disabled', false);
                }
            });


            // firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
            //     let userId = data.uid;
            //     sessionStorage.setItem(config.APP.__LOGIN_USER_EMAIL__, data.email);
            //     sessionStorage.setItem(config.APP.__LOGIN_USER_ID__, userId);
            //     // 查询出当前用户的默认分类
            //     this.store.query('project', { userId: userId, projStatus: 1, isDefaultProj: true }).then((proj) => {
            //
            //         proj.forEach((item) => {
            //             if (item.get('userId') === userId
            //                 && !!item.get('isDefaultProj')
            //                 && item.get('projStatus') === 1) {
            //                 Ember.Logger.debug("默认分类ID：" + item.get('id'));
            //                 //设置默认分类id到session
            //                 sessionStorage.setItem(config.APP.__DEFAULT_PROJECT_ID__, item.get('id'));
            //                 // 强制刷新页面
            //                 location.reload();
            //             }
            //         });
            //     });
            //
            // }, (err) => {
            //     if (err.code === "auth/user-disabled") {
            //         this.set('errorMsg', "用户被禁用了，请联系管理员！");
            //     } else if (err.code === "auth/invalid-email") {
            //         this.set('errorMsg', "邮箱格式不正确！");
            //     } else if (err.code === "auth/user-not-found") {
            //         this.set('errorMsg', "登录用户不存在，请先注册再登录！");
            //     } else if (err.code === "auth/wrong-password") {
            //         this.set('errorMsg', "密码错误！");
            //     } else {
            //         this.set('errorMsg', "网络异常，请确认您的电脑是否联网正常……！");
            //     }
            //
            // });
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
            //         sessionStorage.setItem(config.APP.__LOGIN_USER_NICKNAME__,user.get('nickname'));
            //         sessionStorage.setItem(config.APP.__LOGIN_USER_EMAIL__, email);
            //         sessionStorage.setItem(config.APP.__LOGIN_USER_ID__,user.get('id'));
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
