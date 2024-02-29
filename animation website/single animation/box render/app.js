var t1=gsap.timeline({scrollTrigger:{
    trigger:".inner",
    markers:true,
    start:"40% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true,
}});
t1
// .to(".box",{
//     opacity:"0"
// })
.from("#box",{
    opacity:"0",
    marginTop:0
},"a")

