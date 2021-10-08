



 var swiper = new Swiper('.swiper-container.one', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 3,
        initialSlide: 3,
        keyboardControl: true,
        mousewheelControl: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
        lazyLoadingInPrevNext: true,
        loop: true,
        autoplay: 5000,
        speed: 800,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 30,
            stretch: 0,
            depth: 190,
            modifier: 1,
            slideShadows : true,
        },
        pagination: '.swiper-pagination',
       paginationClickable: true,
       breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });


  //   var swiper = new Swiper( '.swiper-container.two', {
     
  //     effect: 'coverflow',
  //       centeredSlides: true,
  //       slidesPerView: 2,
  //       initialSlide: 3,
  //       keyboardControl: true,
  //       mousewheelControl: true,
  //       lazyLoading: true,
  //       preventClicks: false,
  //       preventClicksPropagation: false,
  //       lazyLoadingInPrevNext: true,
  //       autoplay: 5000,
  //       speed: 800,
  //       nextButton: '.swiper-button-next',
  //       prevButton: '.swiper-button-prev',
  //       coverflow: {
  //           rotate: 0,
  //           stretch: 0,
  //           depth: 190,
  //           modifier: 1,
  //           slideShadows : true,
  //       },
  //       spaceBetween: 30,
  // } );

  var swiper = new Swiper(".swiper-container.two", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 5000,
    speed: 800,
    zoom: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    
  });


  $(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $("header").css({"background-color":"white"});   
        }
        else{
            $("header").css({"background-color":"transparent"});
        }

    })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  