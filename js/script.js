$(document).ready(function(){
  $('.products__slider').slick({
    arrows:false,
    dots:true,
    speed: 300,
    adaptiveHeight:true,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:2500,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:2500,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:2500,
          dots: true
        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.day__slider').slick({
    arrows:false,
    dots:false,
    speed: 300,
    adaptiveHeight:true,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:2500,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:2500,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:2500,
         
        }
      }
    ]
  });
});






