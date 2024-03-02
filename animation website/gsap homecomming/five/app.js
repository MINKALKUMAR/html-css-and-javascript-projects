
// gsap.to(".page1 h1",{
//     transform:"translate(-100%,0)",
//     fontWeight:50,
//     scrollTrigger:{
//         trigger:".page1",
//         scroller:"body",
//         // markers:true,
//         start:"50% 50%",
//         end:"100% 50%",
//         scrub:3,
//         pin:true,

//     }
    
// })
function loader(){
    var a=0;
    setInterval(() => {
        a=a + Math.floor(Math.random()*20)
        if(a<100){
            loader=document.querySelector(".loader h1");
            loader.innerHTML=a;
        }else{
            a=100;
            loader.innerHTML=a;
        }
    }, 150);
}

var t1=gsap.timeline();
t1.to(".loader h1",{
    duration:1,
    delay:.5,
    onStart:loader,
})
.to(".loader",{
    top:"-100vh",   
    duration:.5,
    delay:1,

})
