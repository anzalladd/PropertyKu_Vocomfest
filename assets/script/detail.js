$("li.list-tabs").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});

$(function () {
    $("#tabs").tabs();
});


$(document).ready(function() {
    $('#lainnya-carousel').slick({
      prevArrow: $('#lainnya-btn-left'),
      nextArrow: $('#lainnya-btn-right'),
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1400,
          settings:{
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1100,
          settings:{
            slidesToShow: 3
          }
        },
        {
          breakpoint: 769,
          settings:{
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 321,
          settings:{
            slidesToShow: 1,
          }
        }
      ]
    })
  });
  
$(document).ready(function() {
    $('#terkait-carousel').slick({
      prevArrow: $('#terkait-btn-left'),
      nextArrow: $('#terkait-btn-right'),
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1400,
          settings:{
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1100,
          settings:{
            slidesToShow: 3
          }
        },
        {
          breakpoint: 769,
          settings:{
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 321,
          settings:{
            slidesToShow: 1,
          }
        }
      ]
    })
  });
  
  
$(document).ready(function(){
  $('.item').click(function(){
    window.location.href="detail.html"
  })
  $('#logoo').click(function(){
    window.location.href="index.html"
  })
})

