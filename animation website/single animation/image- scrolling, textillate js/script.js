function first(){
var t10 =gsap.timeline({
    delay:.5,
    duration:1
});
t10
.from(".text-area p",{
    opacity:0
})
.from(".text-area h2",{
    opacity:0
})
}
first();



function second(){



var t1=gsap.timeline({scrollTrigger:{
trigger:"#main",
markers:true,
start:"50% 50%",
end:"150% 50%",
scrub:1.5,
pin:true,
}});

t1
.to(".innerline1",{
    marginTop:"-120vh"
},"a")
.to(".innerline2",{
    marginTop:"20vh"
},"a");

}
second();
$('.h1').textillate({
 
    initialDelay: 200,
  
    in: {
      
      effect: 'fadeInUp',
  
    
      delayScale: 1.5,
  
    
      delay: 50,
  
    },
  

    type: 'char'
  });
a




