/**
* 项目自定义JS处理
* @Author: ubuntuvim
* @Date:   2016-07-18T22:41:47+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-29T23:36:59+08:00
*/

// 点击到左侧分类、中间空白部分会关闭todo详细设置页面，并在展开中间的列表
function addListener(element, e, fn) {
    if (element.addEventListener) {
        element.addEventListener(e, fn, false);
    } else {
        element.attachEvent("on" + e, fn);
    }
}
addListener(document, "click", function(evt) {
    var evt = window.event ? window.event: evt,
    target = evt.srcElement || evt.target;
    // console.log('target.id == ' + target.id);
    if (target.id === "appMainRightId" ||  //点击中间空白地方
        target.id === 'clickSelector' || //点击左侧分类
        target.id === 'newTodoId' || // 新增任务
        target.id === 'todoSearchInputId' //点击搜索框
        ) {  //点击中间的工具栏
        $('#appMainRightId').css('marginRight', '0');
        $("#pcTodoItemId").hide();
    } else if (target.id === 'todoItemTagASelector') {  //点击中间todo列表
        $('#appMainRightId').css('marginRight', '390px');
        $("#pcTodoItemId").show();
    } else {

    }
});

// 全局事件处理
$(function() {

});
