$(".slider").slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const hamburger = document.getElementById("hamburger");

const navcontent = document.querySelector(".nav-content");
const navclose = document.querySelector("#nav-close");

hamburger.addEventListener("click", function () {
  navcontent.style.display = "flex";
});

navclose.addEventListener("click", function () {
  navcontent.style.display = "none";
} );




const cardsItem = document.querySelectorAll(".our-cards-item");
  cardsItem.forEach((item) => {
  item.addEventListener("click", function (e) {
    this.classList.toggle("open");

    const img = this.querySelector(".plus-icon img").src;
    if (img.includes("(1)")) {
      this.querySelector(".plus-icon img").src = "./assets/Plus icon.png";
    } else {
      this.querySelector(".plus-icon img").src = "./assets/Plus icon (1).png";
    }
  });
});
