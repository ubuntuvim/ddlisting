$(function() {
    // 设置首页左侧菜单项选中之后为激活状态
    $("#appMainLeftId li").click(function() {
        // 先清除原来选中的li为非激活状态
        $("#appMainLeftId li").each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
    $("#appMainRightId .glyphicon").click(function() {
        if ($(this).css("opacity") === '1') {
            $(this).css("opacity", 0.4);
        } else {
            $(this).css("opacity", 1);
        }
    });
    // 引入textarea根据内容自适应插件
    $('#updateTodItemId').flexText();

    // 复选框样式
    $('input').iCheck({
       checkboxClass: 'icheckbox_polaris',
       radioClass: 'iradio_polaris',
       increaseArea: '20%' // optional
     });
    //  todoitem详细页面，点击右上角的星号标注好改变透明度
    $("#todoItemId .todo-item-gy").click(function() {
        if ($(this).css("opacity") === '1') {
            $(this).css("opacity", 0.4);
        } else {
            $(this).css("opacity", 1);
        }
    });
});
