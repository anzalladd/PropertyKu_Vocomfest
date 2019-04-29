$(document).ready(function(){
    $('#setting').click(function(event){
        $('.setting-more').toggleClass('active-drop')
        event.stopPropagation();
    })
    $(window).click(function(){
      $('.setting-more').removeClass('active-drop'),
      $('.love-more').removeClass('active-drop')
    })
    $('#heart').click(function(event){
        $('.love-more').toggleClass('active-drop')
        event.stopPropagation();
    })
    $('.hover-card').hover(
      function(){
      $(this).closest(this).children('.text-card').animate({
        top: '250px',
        opacity: '0'
      });
      },
      function(){
        $(this).closest(this).children('.text-card').animate({
          top: '0',
          opacity: '1'
        });
      }
    )

})

var countDownDate = new Date("Apr 20, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;
  

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$(document).ready(function() {
  $('#flash-carousel').slick({
    prevArrow: $('#flash-btn-left'),
    nextArrow: $('#flash-btn-right'),
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
  $('.flash-lelang').slick({
    prevArrow: $('#left-lelang'),
    nextArrow: $('#right-lelang'),
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings:{
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings:{
          slidesToShow: 1
        }
      }
    ]
  })
});


$(document).ready(function() {
  $('#promo-carousel').slick({
    prevArrow: $('#promo-btn-left'),
    nextArrow: $('#promo-btn-right'),
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
  $('#terlaris-carousel').slick({
    prevArrow: $('#terlaris-btn-left'),
    nextArrow: $('#terlaris-btn-right'),
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


$(document).ready(function(){
  $('.banner-carousel').slick({
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed: 2000,
  })
})

$(document).ready(function(){
  $('.lelang-item').click(function(){
    window.location.href = 'lelang.html'
  })
})