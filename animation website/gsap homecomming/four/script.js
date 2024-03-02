var t1 =gsap.timeline()
t1.from("#nav h1 ,#nav h2,#nav h3",{
    opacity:0,
    y:-50,
    duration:.5,
    delay:.5,
    stagger:.3
})
t1.from(".container #left h1",{
    x:-500,
    duration:.5,
    
    opacity:0,
    stagger:.3
})
t1.from(".container #right img",{
 opacity:0,
  scale:.5,

})
var t11=gsap.timeline()
// t11.from("#page2 .box",{
//       y:100,
//       opacity:0,
//         stagger:.5,
//       scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"50% 50%",
//         end:"90% 50%",
//         scrub:3,
//         pin:true,

//       }
// })
var t11=gsap.timeline({scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"50% 50%",
    end:"90% 50%",
    scrub:3,
    pin:true,
}})
 t11.from("#page2 .box",{
      y:100,
      opacity:0,
        stagger:.5,
    
 });