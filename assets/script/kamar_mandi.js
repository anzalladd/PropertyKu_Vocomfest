$(document).ready(function() {
    $('#laris-carousel').slick({
      prevArrow: $('#laris-btn-left'),
      nextArrow: $('#laris-btn-right'),
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
    $('#lainnya1-carousel').slick({
      prevArrow: $('#lainnya1-btn-left'),
      nextArrow: $('#lainnya1-btn-right'),
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
    $('#lainnya2-carousel').slick({
      prevArrow: $('#lainnya2-btn-left'),
      nextArrow: $('#lainnya2-btn-right'),
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
    $('#lainnya3-carousel').slick({
      prevArrow: $('#lainnya3-btn-left'),
      nextArrow: $('#lainnya3-btn-right'),
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
      $('.secondary-btn').click(function(){
          window.location.href = 'payment.html'
      });
      $('.main-btn').click(function(){
        window.location.href = 'payment.html'
    })
  })