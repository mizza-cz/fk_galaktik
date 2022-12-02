$(".js-slider").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  infinite: true,
  prevArrow:
    '<button class="slider__btn slider__btnprev"><img src="/assets/images/left.svg" alt="" ></button> ',
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"><img src="/assets/images/right.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        arrows: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
  ],
});
