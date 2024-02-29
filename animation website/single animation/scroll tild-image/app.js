
var t1= gsap.timeline({scrollTrigger:{
    trigger:".part2",
    // markers:true,
    start:"30% 50%",
    end:"80% 50%",
    scrub:3, 
    pin:true
}});
t1
.to("#image1",{
    opacity:0,
},0)
.to(".image",{
    top:"-5vw",
    rotateX:"0deg"
},0)