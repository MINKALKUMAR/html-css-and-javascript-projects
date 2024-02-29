    var t1= gsap.timeline({scrollTrigger:{
        trigger:"#main",
        // markers:true,
        start:"50% 50%",
        end:"100% 50%",
        scrub:2,
        pin:true,
     }});
     t1
     .to(".top",{
        top:"-50%"
     },"a")
     .to(".bottom",{
        bottom:"-50%"
     },"a")
     .to("#top-h",{
        bottom:"80%"
     },"a")
     .to("#bottom-h",{
        top:"-80%"
     },"a")
     .to(".content",{
        marginTop:"0"
     },"a")
  
    