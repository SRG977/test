$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      autoplay: true,
      autoplayspeed: 500,
      draggable: false,
      swipe: true,
      centerMode: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               arrows: true,
               dots: true,
               adaptiveHeight: true,
               slidesToShow: 2,
               autoplay: true,
               autoplayspeed: 500,
               draggable: false,
               swipe: true,
               centerMode: false,
            }
         },
         {
            breakpoint: 600,
            settings: {
               arrows: true,
               dots: true,
               adaptiveHeight: true,
               slidesToShow: 1,
               autoplay: true,
               autoplayspeed: 500,
               draggable: false,
               swipe: true,
               centerMode: false,
            }
         },
      ]
   });
});
