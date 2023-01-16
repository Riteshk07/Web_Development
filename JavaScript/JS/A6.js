document.getElementById("btnajax").addEventListener("click", makeRequest);
let dt = document.getElementById("data");
function makeRequest(){
    console.log("Button Clicked");
    const  xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    
    xhr.onload = ()=>{
        if(xhr.status === 200){
           dt.innerText = xhr.responseText;
        }else{
            console.log("Problem Occured");
        }
    }
    
    xhr.send();

}