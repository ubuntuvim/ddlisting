import Ember from 'ember';

export default Ember.Component.extend({
    category: null,
    didInsertElement() {
        // 设置被点击的为选中状态
        Ember.$(".pc-category-list-item-selector").click(function() {
            //先重置所有的选中状态，并设置列表前的图标为列表
            Ember.$(".pc-category-list-item-selector").each(function() {
                Ember.$(this).removeClass('pc-category-list-item-active');
                Ember.$(Ember.$(this).children('span')[0]).removeClass('glyphicon-edit');
            });
            // 设置选中者的状态，并设置列表前的图标为编辑
            Ember.$(this).addClass("pc-category-list-item-active");
            // $($(this).children('span')[0]).removeClass('glyphicon-list');
            Ember.$(Ember.$(this).children('span')[0]).addClass('glyphicon-edit');
        });
        // 弹出编辑分类框
        // Ember.$(".pc-category-list-item-selector .glyphicon-edit").click(function() {
        //     console.log('----------');
        //     Ember.$("#editCategoryId").modal('toggle');
        // });

        //如果todo详细设置页面是打开状态则关闭，并且展开中间的todo列表
        Ember.$("#appMainLeftId .panel-body .list-group a").click(function() {
            Ember.$('#appMainRightId').css('marginRight', '0');
            Ember.$("#pcTodoItemId").hide();
        });

    },
    actions: {
        // 显示分类修改页面
        showEditWin(proj) {
            Ember.$("#editCategoryId").modal('toggle');
            // this.set('category', category);
            console.log('projName = ' + proj.get('id'))
            Ember.$("#projNameId1").val(proj.get('projName'));
            Ember.$("#projId1").val(proj.get('id'));
        }
    }
});
