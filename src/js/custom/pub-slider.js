$(".pub-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  infinite: true,
  customPaging: "20px",

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});
