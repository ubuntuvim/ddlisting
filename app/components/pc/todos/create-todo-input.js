/**
* 新建todo处理 app/components/create-todo-input.js
* @Author: ubuntuvim
* @Date:   2016-06-29T21:13:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-30T02:11:55+08:00
*/

import Ember from 'ember';
import dateUtil from '../../../utils/date-util';
import getUserId from '../../../utils/get-user-id';

export default Ember.Component.extend({
    classNames: ['form-group', 'has-feedback'],

    didInsertElement() {

        // 中间部分，新增TODO输入框右边图标样式设置
        Ember.$("#appMainRightId .form-group .glyphicon").click(function() {
            if (Ember.$(this).css("opacity") === '1') {
                Ember.$(this).css("opacity", 0.4);
                Ember.$("#star").val('0');
            } else {
                Ember.$(this).css("opacity", 1);
                Ember.$("#star").val('1');
            }
        });
    },

    actions: {
        //保存todo
        saveTodoItem() {
            // 设置为readonly，防止未保存完成再次提交
            var newTodoId = Ember.$("#newTodoId");
            newTodoId.attr('readonly', true);
            var title = this.get('title');
            if (title) {
                var star = false;
                if (Ember.$('#star').val() === '1') {
                    star = true;
                }
                Ember.Logger.debug("保存todo star: " + star);
                var userId = getUserId();
                Ember.Logger.debug("保存todo userId: " + userId);

                // 获取默认分类id
                let defaultProjectId = Ember.$("#projecId").val();
                Ember.Logger.debug("保存todo 分类id: " + defaultProjectId);
                let todo = this.store.createRecord('todo-item', {
                    userId: userId,
                    title: title,
                    checked: false,
                    timestamp: new Date().getTime(),
                    star: star,
                    recordStatus: 1,
                    startDate: dateUtil(),
                    isPublish: 0,
                    isChildOrParent: 3,
                    greatCount: 0,  //点赞数
                    likeCount: 0,  //like数
                    commentCount: 0,  //评论数
                    user: this.store.peekRecord('user', userId)
                    // project: this.store.peekRecord('project', defaultProjectId)
                    // 为了兼容旧数据，撤销关联
                    // project: defaultProjectId
                });
                // 设置model双向关联
                let proj = this.store.peekRecord('project', defaultProjectId);
                proj.get('todoItems').pushObject(todo);
                todo.save().then(() => {
                    proj.save().then(() => {
                        // 更新用户的myTodoCount
                        this.store.findRecord('user', userId).then((u) => {
                            u.set('myTodoCount', (u.get('myTodoCount')+1));
                            u.set('myIntegral', (u.get('myIntegral')+1));
                            u.save();
                        });
                        newTodoId.attr('readonly', false);
                    });
                });
                //清空title
                this.set('title', '');
            }  //if title
        }
    }
});
