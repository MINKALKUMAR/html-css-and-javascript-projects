gsap.from("#page1 .box1",{

    duration:2,
    rotate:360,
  repeat:5,
 
  

    

     
})
var t1=gsap.timeline({scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"50% 50%",
    end:"80% 50%",
    scrub:2,
    pin:true,


}})
t1
.to("#page2 .box2 ",{
    duration:2,
    rotate:360,
 
})