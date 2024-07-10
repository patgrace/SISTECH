
var swiper = new Swiper(".testimony", {
    spaceBetween: 30,
    grabCursor:true,
    loop: true,

  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
