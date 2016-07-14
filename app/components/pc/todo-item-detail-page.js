/**
* todo详细设置页面 app/components/pc/todo-item-detail-page.js
* @Author: ubuntuvim
* @Date:   2016-06-29T21:13:17+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-14T22:23:34+08:00
*/
import Ember from 'ember';
import dateUtil from '../../utils/date-util';
import completedTodo from '../../utils/completed-todo';
import setStarStatus from '../../utils/set-star-status';

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
                let todo = this.store.createRecord('todo-item', {
                    userId: parentTodo.get('userId'),
                    title: title,
                    checked: checked,
                    timestamp: new Date().getTime(),
                    // star: star,
                    recordStatus: 1,
                    startDate: dateUtil(),
                    isPublish: 0,
                    isChildOrParent: 3,
                    parentTodo: parentTodo
                    // user: this.store.peekRecord('user', parentTodo.get('userId')),
                    // project: this.store.peekRecord('project', parentTodo.get('project').get('id'))
                });
                // 设置model双向关联
                parentTodo.get('childTodos').pushObject(todo);
                todo.save().then(() => {
                    parentTodo.save().then(() => {
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
            completedTodo(id, check, this.store);
        },
        // 设置todo是否公开
        doPublic(id, isPublish) {
            this.store.findRecord('todo-item', id).then((td) => {
                if (isPublish) {
                    td.set('isPublish', 0);
                } else {  //公开
                    td.set('isPublish', 1);
                }
                td.save();
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
                td.get('childTodos').forEach(function(item) {
                    store.findRecord('todo-item', item.id).then(function(td) {
                        td.set('recordStatus', 3);
                        td.save();
                    });
                });
                // td.destroyRecord();
                td.set('recordStatus', 3);
                td.save();
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
