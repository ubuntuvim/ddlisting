import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({

    session: Ember.inject.service('session'),
    // firebase: Ember.inject.service('firebase'),

    didInsertElement() {
        // Initialize Firebase
        // var config = {
        //   apiKey: "AIzaSyDqkMj_1Z6XKeUSZngy30bLVZvhrL7qBh8",
        //   authDomain: "luminous-heat-9079.firebaseapp.com",
        //   databaseURL: "https://luminous-heat-9079.firebaseio.com",
        //   storageBucket: "luminous-heat-9079.appspot.com",
        // };
        // firebase.initializeApp(config.firebase);

        //表单校验
        Ember.$("#register-modal-form").validate({
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
            var password = md5(this.get('password')); //加密
            firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
                // console.log('data == ' + data);
                // console.log('data.uid == ' + data.uid);
                // console.log('data.email == ' + data.email);
                // console.log('data.photoUrl == ' + data.current.photoUrl);
                // console.log('data.displayName == ' + data.displayName);
                // sessionStorage.setItem("__LOGIN_USER_NICKNAME__", data.displayName);
                let userId = data.uid;
                sessionStorage.setItem("__LOGIN_USER_EMAIL__", data.email);
                sessionStorage.setItem("__LOGIN_USER_ID__", userId);
                // 注册成功初始化一个分类，并设置分类id到session中
                this.store.createRecord('project', {
                    userId: userId,
                    projName: '收件箱',
                    timestamp: new Date().getTime(),
                    projStatus: '1', // 项目状态：1-正常；2-删除；3-过期
                    isDefaultProj: true, //true-默认分类（默认分类一个用户只有一个）
                }).save().then((proj) => {
                    let projId = proj.get('id');
                    Ember.Logger.debug("默认分类ID：" + projId);
                    sessionStorage.setItem("__DEFAULT_PROJECT_ID__", projId);
                    // 强制刷新页面
                    location.reload();
                }, () => {
                    Ember.Logger.debug("初始化默认分类失败！");
                });

            }, (err) => {
                Ember.Logger.debug("err.code = " + err.code);
                // debugger;
                if (err.code === "auth/email-already-in-use") {
                    this.set('errorMsg', "此邮箱已经注册，不需要重复注册！");
                } else if (err.code === "auth/invalid-email") {
                    this.set('errorMsg', "邮箱格式不正确！");
                } else if (err.code === "auth/operation-not-allowed") {
                    this.set('errorMsg', "系统已经关闭了邮箱注册功能！");
                } else if (err.code === "auth/weak-password") {
                    this.set('errorMsg', "注册密码太简单！");
                } else {
                    this.set('errorMsg', "网络异常，请确认您的电脑是否联网正常……！");
                }

            });


            // this.store.queryRecord('user', { email: email}).then(function(users) {
            //     return users.get('firstObject');  //返回第一个记录（正常情况查询只返回一个）
            // }).then((user) => {
            //     if (user) {
            //         this.set('errorMsg', "此邮箱已经被注册，请换一个邮箱注册。");
            //     } else {
            //         this.store.createRecord('user', {
            //             email: email,
            //             password: hex_sha1(this.get('password')),// 密码加密
            //             createdate: new Date(),
            //             status: 1,  //用户状态，1-正常；0-删除；
            //             usergrade: 1  //暂时还没有用到
            //         }).save().then((user) => {
            //             sessionStorage.setItem("__LOGIN_USER_NICKNAME__",user.get('nickname'));
            //             sessionStorage.setItem("__LOGIN_USER_EMAIL__",user.get('email'));
            //             let userid = user.get('id');
            //             sessionStorage.setItem("__LOGIN_USER_ID__", userid);
            //
            //             // 给每个注册的用户初始化一个收件箱
            //             // this.store.createRecord("category", {
            //             //     userid: userid,
            //             //     id: 'myTodos',
            //             //     catgname: '收件箱',  //默认名称为
            //             //     user: this.store.peekRecord('user', userid),
            //             //     timestamp: new Date().getTime(),  //项目创建时间
            //             //     catgstatus: 1  // 项目状态：1-正常；2-删除；3-过期
            //             // }).save().then(() => {  //保存
            //             //     // 强制刷新页面
            //             //     location.reload();
            //             // });
            //         });
            //     }
            // });

        }
    }

});
