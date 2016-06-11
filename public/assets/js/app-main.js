$(function() {
    // 设置首页左侧菜单项选中之后为激活状态
    // $("#appMainLeftId li").click(function() {
    //     // 先清除原来选中的li为非激活状态
    //     $("#appMainLeftId li").each(function() {
    //         $(this).removeClass('active');
    //     });
    //     $(this).addClass('active');
    // });
    


    // 初始化中间TODO列表复选框样式
    // $('input').iCheck({
    //    checkboxClass: 'icheckbox_polaris',
    //    radioClass: 'iradio_polaris',
    //    increaseArea: '20%' // optional
    //  });
    // 中间TODO列表前的复选框
     $("#appMainRightId .todo-list .todo-checkbox .glyphicon").click(function() {
        //  console.log($(this).hasClass("glyphicon-check"));
         if ($(this).hasClass("glyphicon-check")) {
             $(this).removeClass('glyphicon-check');
             $(this).addClass('glyphicon-unchecked')
         } else {
             $(this).addClass('glyphicon-check');
             $(this).removeClass('glyphicon-unchecked')
         }
     });

    //  $("#appMainLeftId .panel .panel-heading span").click(function() {
    //      console.log("新增分类");
    //      $('#newOrEditClassifyModal').modal('toggle');
    //  });

    //  $('#appMainLeftId .panel .panel-heading span').on('#newOrEditClassifyModal', function (event) {
    //       console.log("新增分类");
    //       var button = $(event.relatedTarget) // Button that triggered the modal
    //       var recipient = button.data('whatever') // Extract info from data-* attributes
    //       // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //       // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //       var modal = $(this)
    //       modal.find('.modal-title').text('New message to ' + recipient)
    //       modal.find('.modal-body input').val(recipient)
    // })

});
