/**
* 清单广场点击列表后显示的详细todo信息页面组件类
* app/components/pc/pc-index-todo-item-detail.js
* @Author: ubuntuvim
* @Date:   2016-07-19T23:29:46+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-07-21T00:35:37+08:00
*/
import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        // 点击评论按钮时候变为激活状态
        Ember.$("#pcIndexTodoDetailModalWin .modal-dialog .modal-content .glyphicon-comment").click(function() {
            if ($(this).hasClass('comment-active')) {
                $(this).removeClass('comment-active')
            } else {
                $(this).addClass('comment-active')
            }
        });
    }
});
