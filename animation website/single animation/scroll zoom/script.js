var t1=gsap.timeline({scrollTrigger:{
    trigger:"#main",
    markers:true,
    start:"70% 50% ",
    end:"90% 50% ",
    pin:true,
    scrub:2,
}});
t1
.to(".img",{
    width:"100vw",
    height:"100vh"
},"abc")