// app/controllers/pc/projects/todos.js
import Ember from 'ember';

export default Ember.Controller.extend({
    // 是否显示已经完成的todo列表
    isShowCompletedTodoList: false,
    // 查询实现：检测模板输入值传递到controller。再通过controller传递到组件类中，
    // 在组件类中使用helper过滤
    queryTodoValue: '',
    queryTodoValueCpt: Ember.computed('queryTodoValue', function() {
        return this.get('queryTodoValue');
    }),
    // 排序属性
    sortKey:'',
    sortKeyValue: Ember.computed('sortKey', function() {
        console.log("this.get('sortKey') = " + this.get('sortKey'));
        return this.get('sortKey');
    }),
    // 排序 由于无法再sort方法里使用计算属性只能是判断选择哪个排序就显示哪个排序的列表了！！
    sortByTitle: ['title:desc'],
    sortedModelByTitleList: Ember.computed.sort('model.todos', 'sortByTitle'),
    sortByTitmestamp: ['timestamp:asc'],
    sortedModelByTimestampList: Ember.computed.sort('model.todos', 'sortByTitmestamp'),
    sortByEndDate: ['endDate:desc'],
    sortedModelByEndDateList: Ember.computed.sort('model.todos', 'sortByEndDate'),
    sortByStar: ['star:desc'],
    sortedModelByStarList: Ember.computed.sort('model.todos', 'sortByStar'),

    // 多重过滤：1，状态为1；4，不显示子todo
    // model.todos已经是根据用户id和project过滤了
    completedCount: Ember.computed('model.todos.@each.recordStatus',
                                        'model.todos.@each.isChildOrParent', function() {

        var userId = sessionStorage.getItem("__LOGIN_USER_ID__");
        var projectId = this.get('projectId');  //调用组件时候传递过来

        return this.get('model.todos').filter(function(td) {
            return td.get('recordStatus') === 2
                    && td.get('isChildOrParent') === 3;
        }).get('length');
        // return 10;
    }),
    actions: {
        // 改变排序关键字
        resetSortProperty(sortKey) {
            this.set('sortKey', sortKey);
            //首先重置所有
            Ember.$('#appMainRightId .pc-main-page-tools .btn-group .btn-group .dropdown-menu > li').each(function(item) {
                Ember.$(this).removeClass('active');
            });
            // 设置排序按钮的选中状态
            var ids = "#"+sortKey;
            Ember.$(ids).addClass('active');
        },
        // 设置是否显示已经完成的todo列表
        showCompletedTodoList() {
            this.toggleProperty('isShowCompletedTodoList');
        }
    }
});
