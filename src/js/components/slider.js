import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const useInsightSlider = () => {
  new Swiper(".insight__swiper", {
    modules: [Autoplay],
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
};

export const useTestimonialSlider = () => {
  new Swiper(".testimonials__slider", {
    modules: [Autoplay, Navigation],
    slidesPerView: "auto",
    spaceBetween: 22,
    loop: true,
    navigation: {
      nextEl: ".testimonials__btn--next",
      prevEl: ".testimonials__btn--prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
};
