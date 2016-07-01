import Ember from 'ember';
import dateUtil from '../utils/date-util';

export default Ember.Component.extend({
    defaultProjectId: sessionStorage.getItem('__DEFAULT_PROJECT_ID__'),

    didUpdate() {
        //鼠标移动到子任务列表显示右侧的删除按钮
        Ember.$("#pcTodoItemId .inner .todo-item-middle .subtodo-list .list-group").mousemove(function() {
            Ember.$(this).children("p").children('.glyphicon').show();
        });
        //鼠标移开不显示
        Ember.$("#pcTodoItemId .inner .todo-item-middle .subtodo-list .list-group").mouseout(function() {
            Ember.$(this).children("p").children('.glyphicon').hide();
        });
        Ember.$("#middleOverflowId").attr('overflow', 'auto');
    },
    didInsertElement() {
        // 展开右侧详细设置页面的同时缩小中间部分
        Ember.$('#appMainRightId').css("marginRight", '390px');
        // 引入textarea根据内容自适应插件
        // Ember.$('textarea').flexText();
        Ember.$("#middleOverflowId").attr('overflow', 'auto');
    },
    actions: {
        // 保存子任务
        saveSubTodo() {
            var parentTodoId = Ember.$("#parentTodoId").val();
            var title = this.get('subTodoTitle');
            if (title) {
                let parentTodo = this.store.peekRecord('todo-item', parentTodoId);
                let todo = this.store.createRecord('todo-item', {
                    userId: parentTodo.get('userId'),
                    title: title,
                    checked: false,
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
                    parentTodo.save();
                    this.set('subTodoTitle', '');
                });
            }
        },
        // 设置star状态
        doStar(id, star) {
            this.store.findRecord('todo-item', id).then((td) => {
                if (star) {
                    td.set('star', false);
                } else {
                    td.set('star', true);
                }
                td.save();
            });
        },
        // 设置完成状态
        doChecked(id, check) {
            this.store.findRecord('todo-item', id).then((td) => {
                if (check) {
                    td.set('recordStatus', 1);
                    td.set('checked', false);
                } else {  //完成状态
                    td.set('checked', true);
                    td.set('recordStatus', 2);
                }
                td.save();
            });
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
                    // item.destroyRecord();
                    item.set('recordStatus', 3);
                    item.save();
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
