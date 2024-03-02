function locomotive (){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
   
      tablet: { smooth: true },
    
    
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
     
    });
    
 
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}
locomotive();


gsap.from(".page1 .box",{
    scale:0,
    duration:1,
    delay:.5,
    rotate:360,
})
gsap.from(".page2 .box",{
    scale:0,
    duration:1,
    delay:.5,
    rotate:360,
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        markers:true,
        start:"50% 50%",
        end:"80% 50%",
        scrub:2,
        pin:true,
    }
})