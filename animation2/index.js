const section = document.querySelector(".section");
const box = document.querySelector(".box");
const gsap = window.gsap;

const btn = document.createElement("button");
btn.innerText = "Pause";
btn.addEventListener("click", () => {
  gsap.pause(".box");
});
section.appendChild(btn);

gsap.to(".box", {
  x: 300,
  duration: 2,
  rotation: 360,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});




