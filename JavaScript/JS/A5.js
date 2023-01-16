document.getElementById("btnajax").addEventListener("click", makeRequest);

function makeRequest(){
    console.log("Button Clicked");
    const  xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.withCredentials = true;
    xhr.responseType = "text";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = ()=>{
        if(xhr.status === 200){
            console.log('XHR object',xhr);
            console.log('response Text',xhr.responseText);
            console.log('status text',xhr.statusText);
            console.log('Response',xhr.response);
            console.log('Response URL',xhr.responseURL);
            console.log('WIth Credencials',xhr.withCredentials);
            console.log(xhr.getResponseHeader("LAST-Modified"));
            console.log(xhr.getAllResponseHeaders());
        }else{
            console.log("Problem Occured");
        }
    }
    
    xhr.send();

}