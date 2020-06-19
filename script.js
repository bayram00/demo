
$(document).ready(function () {

  $(window).scroll( function() {

    if($(window).scrollTop()>100) {

      $(".backto").fadeIn(1000)
    } else {
      $(".backto").fadeOut(1000)
    }
  });
  $(".backto").click(function () {

    $("html,body").animate({scrollTop:0},600);

  })

})




