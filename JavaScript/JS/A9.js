document.getElementById("btnajax").addEventListener("click", makeRequest);
let table = document.getElementById("table");
function makeRequest(){
    const  xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.responseType = "json";
    xhr.onload = ()=>{
        if(xhr.status === 200){
           x = xhr.response
           for(i=0; i<x.length; i++){
            table.innerHTML += (`<tr><td> ${x[i].id}</td><td> ${x[i].title}</td><td> ${x[i].body}</td></tr>`);
            // console.log(x[i].userID);
            // console.log(x[i].id);
            // console.log(x[i].title);
            // console.log(x[i].body);
           }
        }else{
            console.log("Problem Occured");
        }
    }
    
    xhr.send();

}
