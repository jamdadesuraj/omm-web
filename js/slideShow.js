//animation list: card, fade, box3D, glide, flip, slice, pixel

$(document).ready(function () {
  $(".slideWiz").slideWiz({
    auto: true,
    speed: 5000,
    type: "flip",
    row: 9,
    file: [
      {
        src: {
          main: "img/hero-01.jpg",
          cover: "img/hero-01.jpg",
        },
        title: "OMMSOFTWARE",
        desc: "Your Bright Future Is Our Mission !",

        button: {
          text: "Free Enquiry",
          class: "btn button btn-hover",
        },
      },
      {
        src: {
          main: "img/hero-02.jpg",
          cover: "img/hero-02.jpg",
        },
        title: "OMMSOFTWARE",
        desc: "Become top-of-the-flight specialist after graduating!",
        button: {
          text: "Free Enquiry",
          class: "btn button btn-hover",
        },
      },
    ],
  });
});
