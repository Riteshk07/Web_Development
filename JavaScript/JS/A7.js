document.getElementById("btnajax").addEventListener("click", makeRequest);
let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");
function makeRequest(){
    console.log("Button Clicked");
    const  xhr = new XMLHttpRequest();
    xhr.open("GET", "data1.json", true);
    xhr.responseType = "json";
    xhr.onload = ()=>{
        if(xhr.status === 200){
           console.log(xhr.response);
           n.innerText = xhr.response.name;
           r.innerText = xhr.response.roll;
        }else{
            console.log("Problem Occured");
        }
    }
    
    xhr.send();

}

// function makeRequest(){
//     console.log("Button Clicked");
//     const  xhr = new XMLHttpRequest();
//     xhr.open("GET", "data1.json", true);
//     xhr.onload = ()=>{
//         if(xhr.status === 200){
//            console.log(xhr.response);
//            let obj = JSON.parse(xhr.response);
//            console.log(obj);
//            n.innerText = obj.name;
//            r.innerText = obj.roll;
//         }else{
//             console.log("Problem Occured");
//         }
//     }
    
//     xhr.send();

// }