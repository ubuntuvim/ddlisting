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
    
});
