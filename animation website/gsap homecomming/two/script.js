var t1=gsap.timeline()
t1.from("#nav img ,.nav-part2 h3 ,.nav-part3 h4,button",{
    y:-100,
    duration:.2,
    delay:1,
    stagger:.2,
    opacity:0,
})
t1.from("h1",{
    y:50,
    duration:.2,
    // delay:1,
    stagger:.2,
    opacity:0,

})
t1.from("#main #left-img, #right-img",{
    // y:-50,
    duration:.4,
    delay:.5,
    stagger:.5,
    opacity:0,
    scale:(0.5),
})
t1.from(".scrolldown",{
   scale:0,
   opacity:0,
   duration:1,
})
t1.to(".scrolldown",{
    y:20,
    repeat:-1,
    yoyo:true,
   
})
