let form=document.querySelector("form");
let main=document.querySelector(".main");
let clr=document.querySelector("#clr")

form.addEventListener("submit",(e)=>{
    let name =e.target.uname.value;
    let email =e.target.email.value;
    let phone =e.target.phone.value;
    let a=0;
    let userdata=JSON.parse(localStorage.getItem("userdetails")) ??[];
    for (let v of userdata) {
        if(v.email==email||v.phone==phone){
            a=1;
            break;
    }
}
        if(a==1){
            alert("email or phone is already exist") 

        }else{
            userdata.push({
                "name":name,
                "email":email,
                "phone":phone,
                })
                localStorage.setItem("userdetails",JSON.stringify(userdata))
                e.target.reset();
               
                
        }
    displayData();

    
    e.preventDefault();
    
   
})
let displayData=()=>{
    let userdata=JSON.parse(localStorage.getItem("userdetails")) ??[];
    finalData='';
  userdata.forEach((element,i) => {
       finalData +=`<div class="items">
       <span onclick="deleteBox(${i})">&times;</span>
       <h4>Name</h4>
       <div>${element.name}</div>

       <h4>Email</h4>
       <div>${element.email}</div>
       <h4>Phone</h4>
       <div>${ element.phone}</div>
     </div>`
     
  }
  );

 main.innerHTML=finalData;
}
let deleteBox=(i)=>{
    let userdata=JSON.parse(localStorage.getItem("userdetails")) ??[];
    userdata.splice(i,1);
    localStorage.setItem("userdetails",JSON.stringify(userdata))
   displayData();
    
}
clr.addEventListener("click",()=>{
    localStorage.clear();
    displayData();
})

displayData();
