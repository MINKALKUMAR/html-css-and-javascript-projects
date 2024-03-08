function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,


  tablet: { smooth: true },

 
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
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
  },



  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()
function cursor(){
  crsr=document.querySelector(".cursor");
  document.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x +20+"px";
    crsr.style.top=dets.y+"px";
  })

}
cursor();
function page1(){
  var t1=gsap.timeline({scrollTrigger:{

    trigger:".page1",
    scroller:".main",
    // markers:true,
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
  //   pin:true,

}})
t1
.to(".page1 h1",{
  x:"-100%"
},"a")
.to(".page1 h2",{
  x:"100%"
},"a")
.to(".page1 video",{
  width:"90%"
},"a")
}
page1();
function page2(){
  var t12=gsap.timeline({scrollTrigger:{

    trigger:".page1",
    scroller:".main",
    // markers:true,
    start:"120% 50%",
    end:"150% 50%",
    scrub:2,
    // pin:true,
  
  }})
  t12
  .to(".main",{
    backgroundColor:"White"
  })
}
page2();
function page3(){
  var t13=gsap.timeline({scrollTrigger:{

    trigger:".page1",
    scroller:".main",
    // markers:true,
    start:"250% 50%",
    end:"300% 50%",
    scrub:2,
    // pin:true,
  
  }})
  t13
  .to(".main",{
    backgroundColor:"#0f0D0D"
  })
}
page3();
function eleem(){


var boxes=document.querySelectorAll(".box");
boxes.forEach((e)=>{
      e.addEventListener("mouseenter",()=>{
         var attr=e.getAttribute("data-image");
         crsr.style.height="250px";
         crsr.style.width="250px";
         crsr.style.borderRadius="0";
         crsr.style.backgroundImage=`url(${attr})`;
        // e.style.backgroundColor="red"
         crsr.pointerEvent="none";
      })
      e.addEventListener("mouseleave",()=>{
         var attr=e.getAttribute("data-image");
         crsr.style.height="20px";
         crsr.style.width="20px";
         crsr.style.borderRadius="50%";
         crsr.style.backgroundImage="none";
        // e.style.backgroundColor="transparent"

      })
})
}
eleem();
var heading=document.querySelectorAll("#nav h4");
var purple=document.querySelector("#purple");
heading.forEach((elem)=>{
     elem.addEventListener("mouseenter",()=>{
      purple.style.display="block";
      purple.style.opacity="1";
  // console.log(elem)

     })
     elem.addEventListener("mouseleave",()=>{
      purple.style.display="none";
      purple.style.opacity="0";
     }) 
})