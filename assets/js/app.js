$(document).ready(function(){
    var $jsArrowBack = $("#js-arrow-back");
    var $jsArrowForward = $("#js-arrow-forward");
    var $slide = $(".slide");
    var $jsNavNumLeft = $("#js-navigation-number-left");
    var i = 1;

    $jsArrowForward.click(function(){
        $("#slide"+i).fadeOut(1);
        $("#js-dot"+i).css("background-color", "#11264A");
        //$jsNavNumLeft.html(i);
        i ++;
        $("#slide"+i).fadeIn(1);
        $("#slide"+i).css("display", "flex");
        $("#js-dot"+i).css("background-color", "#E8C48A");
        $jsNavNumLeft.html("0"+i);

    });

    $jsArrowBack.click(function(){
        $("#slide"+i).fadeOut(1);
        $("#js-dot"+i).css("background-color", "#11264A");
        i --;
        $("#slide"+i).fadeIn(1);
        $("#slide"+i).css("display", "flex");
        $("#js-dot"+i).css("background-color", "#E8C48A");
        $jsNavNumLeft.html("0"+i);



    });







});