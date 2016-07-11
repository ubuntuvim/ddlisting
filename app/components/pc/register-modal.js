/**
* 用户注册，注册成功后开始初始化工作
* 1.初始化默认分类
* 2.初始化用户设置
* 3.初始化用户常规信息
*
* @Author: ubuntuvim
* @Date:   2016-06-10T00:17:41+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-08T00:38:19+08:00
*/
import Ember from 'ember';
import randomUserAvatar from '../../utils/random-user-avatar';

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
    		    // minlength: 6,
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
        clearTipInfo() {
            this.set('errorMsg', "");
        },
        register() {
            //清空提示信息
            this.set('errorMsg', "");
            //显示loading
            Ember.$("#registerLoading").show();
            // 按钮不可用
            Ember.$("#registerBtn").attr('disabled', true);

            // 校验注册用户是否已经存在
            // var email = this.get('email');
            // var password = md5(this.get('password')); //加密
            // firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
            //     // console.log('data == ' + data);
            //     // console.log('data.uid == ' + data.uid);
            //     // console.log('data.email == ' + data.email);
            //     // console.log('data.photoUrl == ' + data.current.photoUrl);
            //     // console.log('data.displayName == ' + data.displayName);
            //     // sessionStorage.setItem("__LOGIN_USER_NICKNAME__", data.displayName);
            //     let userId = data.uid;
            //     sessionStorage.setItem("__LOGIN_USER_EMAIL__", data.email);
            //     sessionStorage.setItem("__LOGIN_USER_ID__", userId);
            //     // 注册成功初始化一个分类，并设置分类id到session中
            //     this.store.createRecord('project', {
            //         userId: userId,
            //         projName: '收件箱',
            //         timestamp: new Date().getTime(),
            //         projStatus: '1', // 项目状态：1-正常；2-删除；3-过期
            //         isDefaultProj: true, //true-默认分类（默认分类一个用户只有一个）
            //     }).save().then((proj) => {
            //         let projId = proj.get('id');
            //         Ember.Logger.debug("默认分类ID：" + projId);
            //         sessionStorage.setItem("__DEFAULT_PROJECT_ID__", projId);
            //         // 强制刷新页面
            //         location.reload();
            //     }, () => {
            //         Ember.Logger.debug("初始化默认分类失败！");
            //     });
            //
            // }, (err) => {
            //     Ember.Logger.debug("err.code = " + err.code);
            //     // debugger;
            //     if (err.code === "auth/email-already-in-use") {
            //         this.set('errorMsg', "此邮箱已经注册，不需要重复注册！");
            //     } else if (err.code === "auth/invalid-email") {
            //         this.set('errorMsg', "邮箱格式不正确！");
            //     } else if (err.code === "auth/operation-not-allowed") {
            //         this.set('errorMsg', "系统已经关闭了邮箱注册功能！");
            //     } else if (err.code === "auth/weak-password") {
            //         this.set('errorMsg', "注册密码太简单！");
            //     } else {
            //         this.set('errorMsg', "网络异常，请确认您的电脑是否联网正常……！");
            //     }
            //
            // });


            var email = this.get('email');
            this.store.query('user', { email: email}).then(function(users) {
                // return users.get('firstObject');  //返回第一个记录（正常情况查询只返回一个）
                // 判断新增的邮箱是否已经存在
                let retUser = null;
                users.forEach((user) => {
                    if (email === user.get('email')) {
                        retUser = user;
                    }
                });
                return retUser;
            }).then((user) => {
                if (user) {
                    this.set('errorMsg', "此邮箱已经被注册，请换一个邮箱注册。");
                    Ember.$("#registerLoading").hide();
                    Ember.$("#registerBtn").attr('disabled', false);
                } else {

                    let user = this.store.createRecord('user', {
                        nickname: '',
                        email: email,
                        password: hex_sha1(this.get('password')),// 密码加密
                        createDate: new Date(),
                        status: 1,  //用户状态，1-正常；0-删除；
                        userGrade: 1,  //暂时还没有用到
                        userProfile:randomUserAvatar(),  //用户头像
                        myIntegral:1,//我的积分
                        myTodoCount:0//我的todo总数
                    });
                    // 注册成功初始化一个分类，并设置分类id到session中
                    let project = this.store.createRecord('project', {
                        // userId: userId,
                        projName: '收件箱',
                        timestamp: new Date().getTime(),
                        projStatus: '1', // 项目状态：1-正常；2-删除；3-过期
                        isDefaultProj: true //true-默认分类（默认分类一个用户只有一个）
                        // user: user
                    });
                    //  为注册用户初始化一个profile
                    let profile = this.store.createRecord('profile', {
                        bgImg: '',
                        isOpenEmailNotification: false,  //是否开启消息邮箱通知
                        isOpenPromptTone: true  //是否开启提示音
                        // user: user
                    });

                    // 设置model双向关联
                    user.get('projects').pushObject(project);
                    user.set('profile', profile);
                    project.save().then((proj) => {
                        profile.save().then((prof) => {
                            user.save().then((u) => {
                                sessionStorage.setItem("__LOGIN_USER_NICKNAME__",u.get('nickname'));
                                sessionStorage.setItem("__LOGIN_USER_EMAIL__",u.get('email'));
                                let userId = u.get('id');
                                Ember.Logger.debug("用户ID：" + userId);
                                sessionStorage.setItem("__LOGIN_USER_ID__", userId);

                                let projId = proj.get('id');
                                Ember.Logger.debug("默认分类ID：" + projId);
                                sessionStorage.setItem("__DEFAULT_PROJECT_ID__", projId);

                                Ember.Logger.debug("profile ID：" + prof.get('id'));
                                sessionStorage.setItem("__DEFAULT_PROFILE_ID__", prof.get('id'));
                                // 强制刷新页面
                                location.reload();
                            }, (err) => {
                                Ember.Logger.debug("保存user失败！\n" + err);
                                this.set('errorMsg', "保存user失败！\n" + err);
                                Ember.$("#registerLoading").hide();
                                Ember.$("#registerBtn").attr('disabled', false);
                            });
                        }, (err) => {
                            Ember.Logger.debug("保存profile失败！\n" + err);
                            this.set('errorMsg', "保存profile失败！\n" + err);
                            Ember.$("#registerLoading").hide();
                            Ember.$("#registerBtn").attr('disabled', false);
                        });
                    }, (err) => {
                        Ember.Logger.debug("保存project失败！\n" + err);
                        this.set('errorMsg', "保存project失败！\n" + err);
                        Ember.$("#registerLoading").hide();
                        Ember.$("#registerBtn").attr('disabled', false);
                    });
                }
            });

        }
    }

});
