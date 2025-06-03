import { gsap } from "gsap";

let tl = gsap.timeline();

tl.from(".main-news", {
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
})
  .from(".new-news", {
    y: -50,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
  })
  .addLabel("label")
  .from(
    ".new-wrap",
    {
      x: 50,
      opacity: 0,
      stagger: 0.5,
      duration: 0.6,
      ease: "power2.out",
    },
    "label"
  )
  .from(
    ".numeric-wrap",
    {
      x: 50,
      opacity: 0,
      stagger: 0.5,
      duration: 0.6,
      ease: "power2.out",
    },
    "label"
  );
