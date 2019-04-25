$(document).ready(function(){
    $("div img").click(function(){
        var p=$(this).attr('src').split("/");
        $("figure img").attr('src',p[0]+"/medium/"+p[2]);
        $("figure img").attr('title',$(this).attr('title'));
        $("figure figcaption").text($(this).attr('title'));
    });
    $("figure img").mouseenter(function(){
        $("figcaption").fadeTo(1000,0.8);
    });
    $("figure img").mouseleave(function(){
        $("figcaption").fadeOut(1000);
    });
});