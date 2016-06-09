import Ember from 'ember';

export default Ember.Component.extend({
    category: null,
    didInsertElement() {
        // 设置被点击的为选中状态
        Ember.$(".pc-category-list-item-selector").click(function() {
            //先重置所有的选中状态，并设置列表前的图标为列表
            Ember.$(".pc-category-list-item-selector").each(function() {
                $(this).removeClass('pc-category-list-item-active');
                $($(this).children('span')[0]).removeClass('glyphicon-edit');
            });
            // 设置选中者的状态，并设置列表前的图标为编辑
            $(this).addClass("pc-category-list-item-active");
            // $($(this).children('span')[0]).removeClass('glyphicon-list');
            $($(this).children('span')[0]).addClass('glyphicon-edit');
        });
        // 弹出编辑分类框
        // Ember.$(".pc-category-list-item-selector .glyphicon-edit").click(function() {
        //     console.log('----------');
        //     Ember.$("#editCategoryId").modal('toggle');
        // });
    },
    actions: {
        // 显示分类修改页面
        showEditWin(category) {
            Ember.$("#editCategoryId").modal('toggle');
            // this.set('category', category);
            Ember.$("#catgName1").val(category.get('catgName'));
            Ember.$("#catgId1").val(category.get('id'));
        }
    }
});
