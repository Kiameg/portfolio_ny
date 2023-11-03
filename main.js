import "./style.css";
import { gsap } from "gsap";
import Letterize from "letterizejs";

const text = new Letterize({ targets: ".animation div", wrapper: "div" });

let tl = gsap.timeline();
tl.from(text.listAll, { x: -4000, duration: 1.5, stagger: 0.1 });
tl.to(".animation", { opacity: 0, duration: 1, onComplete: () => document.querySelector(".animation").remove() }, "+=0.5");

gsap.from(".vs_icons", { x: -4000, duration: 1 });
