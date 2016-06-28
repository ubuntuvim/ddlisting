import Ember from 'ember';

export default Ember.Controller.extend({
	//     queryParams: ['queryValue', 'projCode', 'recordStatus'],
//     queryValue: null,
//     projCode: 'myTodos',
//     //todo项状态recordStatus：1-未完成（新增）；2-完成；3-删除（放到回收站可恢复）；4-完全删除（不可恢复）
//     recordStatus: '1',  //默认显示未完成
//     userId: null,

    queryParams: ['projectType', 'recordStatus'],
    projectType: sessionStorage.getItem("__DEFAULT_PROJECT_ID__"),
    recordStatus: ''
});
