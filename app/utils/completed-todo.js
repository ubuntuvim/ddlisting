/**
* 公共方法：设置todo为完成状态  app/utils/completed-todo.js
* @Author: ubuntuvim
* @Date:   2016-07-03T12:57:37+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-06T02:19:35+08:00
*/

import Ember from 'ember';
import getUserId from '../utils/get-user-id';

// 公共部分：设置todo为完成状态，并且同步设置所属的子todo的状态
export default function completedTodo(id, check, store) {
    let ids = "#"+id;

    store.findRecord('todo-item', id).then((td) => {
        if (check) {
            Ember.$(ids).slideUp("normal", () => {
                // 未完成
                td.set('recordStatus', 1);
                td.set('checked', false);
                // 设置所有的子todo为非完成状态
                td.get('childTodos').forEach((std) => {
                    store.findRecord('todo-item', std.id).then((td2) => {
                        td2.set('recordStatus', 1);
                        td2.set('checked', false);
                        td2.save().then(() => {
                            // star todo积分加1
                            store.findRecord('user', getUserId()).then((u) => {
                                u.set('myIntegral', (u.get('myIntegral')-1));
                                u.save();
                            });
                        });
                    });
                });

            });
            Ember.$(ids).slideUp("normal");
            td.save().then(() => {
                // star todo积分加1
                store.findRecord('user', getUserId()).then((u) => {
                    u.set('myIntegral', (u.get('myIntegral')+1));
                    u.save();
                });
            });
        } else {  //完成状态
            Ember.$(ids).slideUp("normal", () => {
                td.set('checked', true);
                td.set('recordStatus', 2);
                // 设置所有的子todo为完成状态
                td.get('childTodos').forEach((std) => {
                    store.findRecord('todo-item', std.id).then((td2) => {
                        td2.set('recordStatus', 2);
                        td2.set('checked', true);
                        td2.save().then(() => {
                            // star todo积分加1
                            store.findRecord('user', getUserId()).then((u) => {
                                u.set('myIntegral', (u.get('myIntegral')+1));
                                u.save();
                            });
                        });
                    });
                });
            });
            td.save().then(() => {
                // star todo积分加1
                store.findRecord('user', getUserId()).then((u) => {
                    u.set('myIntegral', (u.get('myIntegral')-1));
                    u.save();
                });
            });
        }  //else
    });
}
