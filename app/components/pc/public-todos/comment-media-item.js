/**
* 每个评论条
* @Author: ubuntuvim
* @Date:   2016-08-04T00:26:39+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-05T02:00:58+08:00
*/
import Ember from 'ember';
import getUserId from '../../../utils/get-user-id';
import setGreatedLiked from '../../../utils/set-greated-liked';

export default Ember.Component.extend({

    didInsertElement() {
        // 点击“取消”隐藏评论输入框
        Ember.$("#pcIndexTodoDetailModalWin .modal-dialog .modal-content .cancelComment").click(function() {
            //找到父元素 然后在隐藏评论框
            Ember.$(Ember.$(this).parents('.subCommentBox')).collapse('toggle');
        });
    },

    actions: {
        saveSubComment(parentCommentId) {

            // 设置保存按钮不可用
            let btnId = "#submitCommentBtnId_"+parentCommentId;
            Ember.$(btnId).attr('disabled', true);
            let inputId = "#subCommentInputId_"+parentCommentId;
            let commentInfo = Ember.$(inputId).html();
            let parentComment = this.store.peekRecord('comment', parentCommentId);
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
            // 设置子comment和父comment的双向关联关系
            parentComment.get('childComments').pushObject(comment);
            comment.save().then(() => {
                parentComment.save().then(() => {
                    // 更新用户的myTodoCount
                    this.store.findRecord('user', getUserId()).then((u) => {
                        u.set('myTodoCount', (u.get('myTodoCount')+1));
                        u.set('myIntegral', (u.get('myIntegral')+1));  //新建todo积分+1
                        u.save();
                    });

                    // 更新父 comment 评论数
                    this.store.findRecord('comment', parentCommentId).then((fcomm) => {
                        fcomm.set('commentCount', (fcomm.get('commentCount')+1));
                        fcomm.save();
                    });

                    // 更新 todo 评论数
                    this.store.findRecord('todo-item', parentComment.get('todoItem').get('id')).then((td) => {
                        td.set('commentCount', (td.get('commentCount')+1));
                        td.save();
                    });
                    Ember.$(inputId).html('');
                    Ember.$(btnId).attr('disabled', false);
                });
            });
        },
        // 点赞
        thumbsUp(id, elemId) {
            setGreatedLiked(this.store, 'comment', 'greatCount', id, elemId);
        },
        // 喜欢
        liked(id, elemId) {
            setGreatedLiked(this.store, 'comment', 'likeCount', id, elemId);
        }
    }
});
