let burger= document.querySelector(".burger");
let navbar= document.querySelector(".navbar");
let navList= document.querySelector(".nav-list");
let rightNav= document.querySelector(".rightnav");
burger.addEventListener("click",()=>{
     navbar.classList.toggle("h-nav-res");
     navList.classList.toggle("v-class-res");
     rightNav.classList.toggle("v-class-res");
})