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
        $(".navigation__link").mouseenter(function(){
            $(this).css("background-color", "#E8C48A");
        });
        $(".navigation__link").mouseleave(function(){
            $(this).css("background-color", "#11264A");
        });

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


$(document).ready(function(){
    var $jsSelectYear = $(".js-select-year");

    /*$jsSelectYear.select2({
        placeholder: "Выберите год"

    });*/

    $jsSelectYear.SumoSelect({
        placeholder: "Выберите год"

    });

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    mouseDrag: true,
    items: 1,
    dotsEach: true
  });

  $(".owl-prev span").html("");
  $(".owl-next span").html("");

  /*if ($(".owl-dot").hasClass("active")) {
    $(this).css("background-color", "#E8C48A");
  }*/
});

/*$(document).ready(function(){
  $("#checkbox").checkboxradio({
    
  });

});*/

$(document).ready(function(){
  $(".js-select-year").select2({
    placeholder: 'Выберите год',
    minimumResultsForSearch: Infinity,
  });

});

/*$(document).ready(function(){
  var $containerSlider = $(".container-slider");

  $containerSlider.slick({
    //slidesToShow: 3,
    //slidesToScroll: 3
  });

});*/