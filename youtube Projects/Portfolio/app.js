console.log("code is running....");
document.querySelector(".cross").style.display="none"
document.querySelector(".hamburger").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if(  document.querySelector(".sidebar").classList.contains("sidebarGo"))
    {
        document.querySelector(".ham").style.display="inline"
        setTimeout(() => {
            
        }, 300);
        document.querySelector(".cross").style.display="none"
    }
    else{
        document.querySelector(".ham").style.display="none"
        setTimeout(() => {
            document.querySelector(".cross").style.display="inline"
            
        }, 320);
    }
})


