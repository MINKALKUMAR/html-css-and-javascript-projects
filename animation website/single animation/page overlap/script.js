var t1= gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"30% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
t1
.to(".main-text",{
    top:"-5%",
},"a")
.to("#card1",{
    top:"35%",
},"a")
.to("#card2",{
    top:"130%",
},"a")
.to("#card2",{
    top:"42%"
},"b")
.to("#card1",{
    width:"65%",
    height:"65vh"
},"b")
.to("#card3",{
    top:"130%"
},"b")
.to("#card3",{
    top:"50%"
},"c")
.to("#card2",{
   width:"70%",
   height:"70vh"
},"c")







