import "swiper/swiper-bundle.css";
import "./style.css";
import { gsap } from "gsap";
import Letterize from "letterizejs";
import Swiper from "swiper";
import { Mousewheel, EffectCards, Navigation } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Mousewheel, EffectCards, Navigation],
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  effect: "cards",
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const text = new Letterize({ targets: ".animation div", wrapper: "div" });

let tl = gsap.timeline();
tl.from(text.listAll, { x: -4000, duration: 1.5, stagger: 0.1 });
tl.to(".animation", { opacity: 0, duration: 1, onComplete: () => document.querySelector(".animation").remove() }, "+=0.5");
