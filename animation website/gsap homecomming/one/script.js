function boxanim(){
    // gsap.to(".box",{
//     x:500,
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:(.5)
// })
        //****** dono code  me se ek code use karna  */
gsap.from(".box",{
    x:500,
    y:300,
    duration:2,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    scale:(.5),
    stagger:1,   // means genrate delay  between elements 
    repeat:5,   //repeat the animation
    yoyo:true, //repeat animation with same property 
})
}
// boxanim();
function headinganim(){
 var t1=gsap.timeline();  
 t1.to("h1",{
        x:400,      
        delay:1,
    })
 t1.to("h2",{
        x:450,      
        delay:1,
    })
 t1.to("h3",{
        x:500,      
        delay:1,
    })
}
headinganim();