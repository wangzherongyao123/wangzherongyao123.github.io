$(function () {

$(".header .wx a").mouseenter(function () {

    $(".wx .wx-img").css({
        display:"block"
    })
    });
    $(".header .wx a").mouseleave(function () {
        $(".wx .wx-img").css({  display:"none"})

    });

  $("#context_a .a1").mouseenter(function () {
   $(".context .context_ul").css("display","block")
      $(".context .context_ul1").css("display","none")
      $(".context .context_ul2").css("display","none")
      $(".context .context_ul3").css("display","none")
      $(".context .context_ul4").css("display","none")
  });
    $("#context_a .a1").mouseleave(function () {
        $(".context .context_ul").css("display","block")
        $(".context .context_ul1").css("display","none")
        $(".context .context_ul2").css("display","none")
        $(".context .context_ul3").css("display","none")
        $(".context .context_ul4").css("display","none")
    });

    $("#context_a .a2").mouseenter(function () {
        $(".context .context_ul1").css("display","block")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","none")
        $(".context .context_ul3").css("display","none")
        $(".context .context_ul4").css("display","none")
    }); $("#context_a .a2").mouseleave(function () {
        $(".context .context_ul1").css("display","block")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","none")
        $(".context .context_ul3").css("display","none")
        $(".context .context_ul4").css("display","none")
    });

    $("#context_a .a3").mouseenter(function () {
        $(".context .context_ul1").css("display","none")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","block")
        $(".context .context_ul3").css("display","none")
        $(".context .context_ul4").css("display","none")
    }); $("#context_a .a3").mouseleave(function () {
        $(".context .context_ul1").css("display","none")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","block")
        $(".context .context_ul3").css("display","none")
        $(".context .context_ul4").css("display","none")
    });   $("#context_a .a4").mouseenter(function () {
        $(".context .context_ul1").css("display","none")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","none")
        $(".context .context_ul3").css("display","block")
        $(".context .context_ul4").css("display","none")
    }); $("#context_a .a4").mouseleave(function () {
        $(".context .context_ul1").css("display","none")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","none")
        $(".context .context_ul3").css("display","block")
        $(".context .context_ul4").css("display","none")
    });   $("#context_a .a5").mouseenter(function () {
        $(".context .context_ul1").css("display","none")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","none")
        $(".context .context_ul3").css("display","none")
        $(".context .context_ul4").css("display","block")
    }); $("#context_a .a5").mouseleave(function () {
        $(".context .context_ul1").css("display","none")
        $(".context .context_ul").css("display","none")
        $(".context .context_ul2").css("display","none")
        $(".context .context_ul3").css("display","none")
        $(".context .context_ul4").css("display","block")
    });

})