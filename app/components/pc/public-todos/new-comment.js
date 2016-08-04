/**
* 创建新的评论
* @Author: ubuntuvim
* @Date:   2016-08-04T02:04:54+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-05T01:57:04+08:00
*/

import Ember from 'ember';
import getUserId from '../../../utils/get-user-id';
import setGreatedLiked from '../../../utils/set-greated-liked';

export default Ember.Component.extend({
    didInsertElement() {
        Ember.$("#pcIndexTodoDetailModalWin .modal-dialog .modal-content .glyphicon-comment").click(function() {
            if (Ember.$(this).hasClass('comment-active')) {
                Ember.$(this).removeClass('comment-active');
            } else {
                Ember.$(this).addClass('comment-active');
            }
        });
    },
    actions: {
        saveComment(tdId) {
            // 设置保存按钮不可用
            Ember.$("#parentCommentBtnId").attr('disabled', true);

            let commentInfo = Ember.$("#parentCommentInputId").html();
            let todo = this.store.peekRecord('todo-item', tdId);
            let user = this.store.peekRecord('user', getUserId());
            let comment = this.store.createRecord('comment', {
                title: commentInfo,
                createDate: new Date().getTime(),
                userId: user.get('id'),
                userEmail: user.get('email'),
                userProfile: user.get('userProfile'),
                likeCount: 0,
                greatCount: 0,
                commentCount: 0,
                user: user
            });
            // 设置comment和todo的双向关联关系
            todo.get('comments').pushObject(comment);
            comment.save().then(() => {
                todo.save().then(() => {
                    // 更新用户的myTodoCount
                    this.store.findRecord('user', getUserId()).then((u) => {
                        u.set('myTodoCount', (u.get('myTodoCount')+1));
                        u.set('myIntegral', (u.get('myIntegral')+1));  //新建todo积分+1
                        u.save();
                    });
                    // 更新 todo 评论数
                    this.store.findRecord('todo-item', tdId).then((td) => {
                        td.set('commentCount', (td.get('commentCount')+1));
                        td.save();
                    });
                    Ember.$("#parentCommentInputId").html('');
                    Ember.$("#parentCommentBtnId").attr('disabled', false);
                });
            });
        },  //saveSubComment
        // 点赞
        thumbsUp(id, elemId) {
            // setGreatedLiked(store, modelName, fieldName, id, elemId)
            setGreatedLiked(this.store, 'todo-item', 'greatCount', id, elemId);
        },
        // 喜欢
        liked(id, elemId) {
            setGreatedLiked(this.store, 'todo-item', 'likeCount', id, elemId);
        }
    }
});
