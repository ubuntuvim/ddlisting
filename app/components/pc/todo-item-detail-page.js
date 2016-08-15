/**
* todo详细设置页面 app/components/pc/todo-item-detail-page.js
* @Author: ubuntuvim
* @Date:   2016-06-29T21:13:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-16T01:09:55+08:00
*/
import Ember from 'ember';
import dateUtil from '../../utils/date-util';
import completedTodo from '../../utils/completed-todo';
import setStarStatus from '../../utils/set-star-status';
import getUserId from '../../utils/get-user-id';
import playCompletedBGM from '../../utils/play-completed-bgm';

export default Ember.Component.extend({
    defaultProjectId: sessionStorage.getItem('__DEFAULT_PROJECT_ID__'),

    didUpdate() {

    },
    didInsertElement() {
        // 展开右侧详细设置页面的同时缩小中间部分
        Ember.$('#appMainRightId').css("marginRight", '390px');
        // 引入textarea根据内容自适应插件
        // Ember.$('textarea').flexText();
        Ember.$("#middleOverflowId").attr('overflow', 'auto');
        //鼠标移动到子任务列表显示右侧的删除按钮
        Ember.$("#pcTodoItemId .inner .todo-item-middle .subtodo-list .list-group").mousemove(function() {
            Ember.$(this).children("p").children('.glyphicon').show();
        });
        //鼠标移开不显示
        Ember.$("#pcTodoItemId .inner .todo-item-middle .subtodo-list .list-group").mouseout(function() {
            Ember.$(this).children("p").children('.glyphicon').hide();
        });
        // Ember.$("#middleOverflowId").attr('overflow', 'auto');
        // 设置刷新后选中的todo，设置其背景色,，在todo-item-page.js里设置点击时的选中状态
        let ids = "#"+Ember.$("#selectedTodoId").val();  //选中的todo id值
        Ember.Logger.debug("设置刷新后选中的todo id为: " + ids);
        Ember.$(ids).addClass('todo-item-selected-status');

    },
    actions: {
        // 保存子任务，如果父todo是完成状态那么添加的子任务也是完成状态
        saveSubTodo() {
            // 设置为readonly，防止没保存完成就再次输入
            let inputId = Ember.$("#newSubTodoId");
            inputId.attr('readonly', true);
            // 父todo
            let parentTodoId = Ember.$("#parentTodoId").val();
            let title = this.get('subTodoTitle');
            let parentTodoCheckedId = Ember.$("#parentTodoCheckedId").val();
            let checked = false;
            if ('true' === parentTodoCheckedId) {
                checked = true;
            }
            if (title) {
                let parentTodo = this.store.peekRecord('todo-item', parentTodoId);
                let userId = parentTodo.get('userId');
                let todo = this.store.createRecord('todo-item', {
                    userId: userId,
                    title: title,
                    checked: checked,
                    timestamp: new Date().getTime(),
                    // star: star,
                    recordStatus: 1,
                    startDate: dateUtil(),
                    isPublish: 0,
                    isChildOrParent: 3,
                    parentTodo: parentTodo,
                    greatCount: 0,  //点赞数
                    likeCount: 0,  //like数
                    commentCount: 0,  //评论数
                    user: this.store.peekRecord('user', parentTodo.get('userId'))
                    // project: this.store.peekRecord('project', parentTodo.get('project').get('id'))
                });
                // 设置model双向关联
                parentTodo.get('childTodos').pushObject(todo);
                todo.save().then(() => {
                    parentTodo.save().then(() => {
                        // 更新用户的myTodoCount
                        this.store.findRecord('user', getUserId()).then((u) => {
                            u.set('myTodoCount', (u.get('myTodoCount')+1));
                            u.set('myIntegral', (u.get('myIntegral')+1));  //新建todo积分+1
                            u.save();
                        });
                        inputId.attr('readonly', false);
                    });
                });
                this.set('subTodoTitle', '');
            }
        },
        // 设置star状态
        doStar(id, star) {
            setStarStatus(id, star, this.store);
        },
        // 设置完成状态
        doChecked(id, check) {
            // completedTodo(id, check, this.store);
            this.store.findRecord('todo-item', id).then((td) => {
                if (check) {
                    // 未完成
                    td.set('recordStatus', 1);
                    td.set('checked', false);
                    // 设置所有的子todo为非完成状态
                    td.get('childTodos').forEach((std) => {
                        this.store.findRecord('todo-item', std.id).then((subtd) => {
                            subtd.set('recordStatus', 1);
                            subtd.set('checked', false);
                            u.set('myIntegral', (u.get('myIntegral')+2));  //完成一个todo积分+2
                            subtd.save().then(() => {
                                // 更新用户的myTodoCount
                                this.store.findRecord('user', getUserId()).then((u) => {
                                    u.set('myIntegral', (u.get('myIntegral')-1));  //设置为未完成todo积分-1
                                    u.save();
                                });
                            });
                        });
                    });
                } else {  //完成状态

                    // 如果用户开启了音效
                    let isOpenPromptTone = this.store.peekRecord('user', getUserId()).get('profile').get('isOpenPromptTone');
                    playCompletedBGM(isOpenPromptTone); //播放完成提示音效

                    td.set('checked', true);
                    td.set('recordStatus', 2);
                    // 设置所有的子todo为完成状态
                    td.get('childTodos').forEach((std) => {
                        this.store.findRecord('todo-item', std.id).then((subtd) => {
                            subtd.set('recordStatus', 2);
                            subtd.set('checked', true);
                            subtd.save().then(() => {
                                // 更新用户的myTodoCount
                                this.store.findRecord('user', getUserId()).then((u) => {
                                    u.set('myIntegral', (u.get('myIntegral')+2));  //完成todo积分+2
                                    u.save();
                                });
                            });
                        });
                    });
                }
                td.save().then(() => {
                    // 更新用户的myTodoCount
                    this.store.findRecord('user', getUserId()).then((u) => {
                        u.set('myIntegral', (u.get('myIntegral')+1));  //完成todo积分+2
                        u.save();
                    });
                });
            });
        },
        // 设置todo是否公开
        doPublic(id, isPublish) {
            this.store.findRecord('todo-item', id).then((td) => {
                let integral = 0;
                if (isPublish) {
                    td.set('isPublish', 0);
                    integral = -3;
                } else {  //公开
                    td.set('isPublish', 1);
                    integral = 3;
                }
                td.save().then(() => {
                    // 更新用户的myTodoCount
                    this.store.findRecord('user', getUserId()).then((u) => {
                        u.set('myIntegral', (u.get('myIntegral')+integral));  //设置publictodo积分+3
                        u.save();
                    });
                });
            });
        },
        // 删除子任务
        delSubTodo(id) {
            //设置为删除状态
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('recordStatus', 3);
                td.save();
            });
        },

        // 更新title
        updateTitle(id) {
            // console.log("id == " + id);
            let title = Ember.$("#pc_update_todo_title_id").val();
            // console.log("model.title == " + title);
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('title', title);
                td.save();
            });
        },
        // 设置开始时间，通常默认情况创建的日期就是开始时间
        setStartTimeById(id) {
            let startTime = Ember.$("#startTimeId").val();
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('startDate', startTime);
                td.save();
            });
        },
        // 设置到期时间
        setEndTimeById(id) {
            let endTime = Ember.$("#endTimeId").val();
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('endDate', endTime);
                td.save();
            });
        },
        // 删除父todo，同时会删除关联的子todo
        // TODO 暂时不删除，只是设置为删除状态
        delParentTodo(id, projectId) {
            location.href = "/#/pc/projects/"+projectId;
            Ember.$('#appMainRightId').css('marginRight', '0');
            // Ember.$("#pcTodoItemId").hide();
            this.store.findRecord('todo-item', id).then((td) => {
                //删除关联的子todo
                td.get('childTodos').forEach((item) => {
                    this.store.findRecord('todo-item', item.id).then((td) => {
                        td.set('recordStatus', 3);
                        td.save().then(() => {
                            // 更新用户的myTodoCount
                            this.store.findRecord('user', getUserId()).then((u) => {
                                u.set('myTodoCount', (u.get('myTodoCount')-1));
                                u.save();
                            });
                        });
                    });
                });
                // td.destroyRecord();
                td.set('recordStatus', 3);
                td.save().then(() => {
                    // 更新用户的myTodoCount
                    this.store.findRecord('user', getUserId()).then((u) => {
                        u.set('myTodoCount', (u.get('myTodoCount')-1));
                        u.save();
                    });
                });
            });
        },
        // 更新备注信息
        updateRemarkById(id) {
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('remark', Ember.$("#todoRemarkId").val());
                td.save();
            });
        },
        // 更新子任务title
        updateSubTodoTitle(id) {
            let ids = "#"+id;
            let title = Ember.$(ids).val();
            this.store.findRecord('todo-item', id).then((td) => {
                td.set('title', title);
                td.save();
            });
        }

    }
});
