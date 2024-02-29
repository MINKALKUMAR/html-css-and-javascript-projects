const slide=document.querySelectorAll(".slide");
var counter=0;
slide.forEach((slide,index)=>{
  slide.style.left=`${index *100}%`;
});

const goPrevious=()=>{
    counter--
  
    slideImage();
 
}
const goNext=()=>{
    counter++

    slideImage();
    
   
}

const slideImage=()=>{
    slide.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter * 100}%)`
    }

    );
}
