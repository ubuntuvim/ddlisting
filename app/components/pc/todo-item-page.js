/**
* todo列表处理 app/components/pc/todo-item-page.js
* @Author: ubuntuvim
* @Date:   2016-06-25T00:24:36+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-28T04:33:21+08:00
*/
import Ember from 'ember';
import completedTodo from '../../utils/completed-todo';
import setStarStatus from '../../utils/set-star-status';
import getUserId from '../../utils/get-user-id';
import playCompletedBGM from '../../utils/play-completed-bgm';

export default Ember.Component.extend({
    didUpdate() {
        // 设置左侧分类默认选中，根据URL的分类id判断是哪个分类
        // 但是还需要在project-list-item.js设置点击的时候选中状态
        let ids = "#"+Ember.$("#selectedProjectType").val();
        Ember.$(ids).addClass('pc-category-list-item-active');
    },
    didInsertElement() {
        // Ember.$("#appMainRightId .todo-list .pc-main-completed-todo-list-tip").css('marginBottom', '100px');
        // 设置选中的todo状态，在todo-item-detail-page.js里设置刷新后选中的todo状态
        Ember.$("#appMainRightId .todo-list .list-group .list-group-item").click(function() {

            // 显示todo详细设置页面
            Ember.$("#pcTodoItemId").show();
            // 显示todo详细设置页面的时候收缩列表
            Ember.$('#appMainRightId').css('marginRight', '390px');

            // 先重置所有todo的状态为未选中
            Ember.$("#appMainRightId .todo-list .list-group .a-selector .list-group-item").each(function() {
                Ember.$(this).removeClass('todo-item-selected-status');
            });
            // 设置被点击的todo状态
            Ember.$(this).addClass('todo-item-selected-status');
        });  // end click

    },
    actions: {
        // 设置star状态
        doStar(id, star) {
            let ids = "#"+id;
            // 在todo列表上点击star时加背景标注出被点击的是哪个todo：先重置所有todo的状态为未选中
            Ember.$("#appMainRightId .todo-list .list-group .a-selector .list-group-item").each(function() {
                Ember.$(this).removeClass('todo-item-selected-status');
            });
            // 设置被点击的todo状态
            Ember.$(ids).addClass('todo-item-selected-status');
            setStarStatus(id, star, this.store);
        },
        // 设置完成状态
        doChecked(id, check) {
            // completedTodo(id, check, this.store);
            let ids = "#"+id;
            this.store.findRecord('todo-item', id).then((td) => {
                if (check) {
                    Ember.$(ids).slideUp("normal", () => {
                        // 未完成
                        td.set('recordStatus', 1);
                        td.set('checked', false);
                        // 设置所有的子todo为非完成状态
                        td.get('childTodos').forEach((std) => {
                            this.store.findRecord('todo-item', std.id).then((td2) => {
                                td2.set('recordStatus', 1);
                                td2.set('checked', false);
                                td2.save().then(() => {
                                    // star todo积分加1
                                    this.store.findRecord('user', getUserId()).then((u) => {
                                        u.set('myIntegral', (u.get('myIntegral')-1));
                                        u.save();
                                    });
                                });
                            });
                        });
                        td.save().then(() => {
                            // star todo积分加1
                            this.store.findRecord('user', getUserId()).then((u) => {
                                u.set('myIntegral', (u.get('myIntegral')+1));
                                u.save();
                            });
                        });
                    });
                    Ember.$(ids).slideUp("normal");
                } else {  //完成状态
                    // 如果用户开启了音效
                    let isOpenPromptTone = this.store.peekRecord('user', getUserId()).get('profile').get('isOpenPromptTone');
                    playCompletedBGM(isOpenPromptTone); //播放完成提示音效

                    Ember.$(ids).slideUp("normal", () => {
                        td.set('checked', true);
                        td.set('recordStatus', 2);
                        // 设置所有的子todo为完成状态
                        td.get('childTodos').forEach((std) => {
                            this.store.findRecord('todo-item', std.id).then((td2) => {
                                td2.set('recordStatus', 2);
                                td2.set('checked', true);
                                td2.save().then(() => {
                                    // star todo积分加1
                                    this.store.findRecord('user', getUserId()).then((u) => {
                                        u.set('myIntegral', (u.get('myIntegral')+1));
                                        u.save();
                                    });
                                });
                            });
                        });
                        // td.save();
                        td.save().then(() => {
                            // star todo积分加1
                            this.store.findRecord('user', getUserId()).then((u) => {
                                u.set('myIntegral', (u.get('myIntegral')-1));
                                u.save();
                            });
                        });
                    });

                }  //else
            });
        }
    }
});
