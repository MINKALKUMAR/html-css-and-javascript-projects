let form=document.querySelector("form");
let table=document.querySelector("table");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(username.value,password.value)
    let userdata=JSON.parse(localStorage.getItem("userdetails"))??[];
    userdata.push({
        "username":username.value,
        "password":password.value
    })
   
     localStorage.setItem("userdetails",JSON.stringify(userdata)) 
     displaydata();
})
let displaydata=()=>{
    let userdata=JSON.parse(localStorage.getItem("userdetails"))??[];
    finaldata=` <tr>
    <th>Website</th>
    <th>User Name</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>`;

    userdata.forEach((e,i) => {
        finaldata+= `<tr>
        <td>Google</td>
        <td>${e.username}</td>
        <td>${e.password}</td>
        <td><button onclick="deletepass(${i})">Delete</button></td>
      </tr>`
    });
    console.log(finaldata)
    
  table.innerHTML=finaldata;
}
displaydata();
function deletepass(i){
    let userdata=JSON.parse(localStorage.getItem("userdetails"))??[];
    userdata.splice(i,1)
    localStorage.setItem("userdetails",JSON.stringify(userdata)) 
    displaydata();

}