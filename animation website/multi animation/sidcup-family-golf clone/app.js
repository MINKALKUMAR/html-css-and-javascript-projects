function crsr() {
  var cursor = document.querySelector(".cursor");
  var blur = document.querySelector(".cursor-b");
  document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
  });
}
crsr();

gsap.to("#nav", {
  height: "70px",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    // markers: true,
    start: "50% 50%",
    end: "70% 50%",
    scrub:2,
    pin: true,
  },
});
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "60% 50%",
    end: "100% 50%",
    scrub: 2,
    // pin: true,
  },
});
