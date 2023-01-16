document.getElementById("btnajax").addEventListener("click", makeRequest);

function makeRequest(){
    console.log("Button Clicked");
    const  xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.timeout = 5;
    xhr.onload = ()=>{
        if(xhr.status === 200){
            console.log(xhr);
            console.log(xhr.responseText);
        }else{
            console.log("Problem Occured");
        }
    }
    xhr.onprogress = (e)=>{
        console.log(e.loaded);
        console.log(e.total);
    }
    xhr.onerror = ()=>{
        console.log("Network Not Availble");
    }
    xhr.onloadstart = ()=>{
        console.log("Tranjection Has Started");
    }
    xhr.onloadend = ()=>{
        console.log("Tranjection End");
    }
    xhr.onabort = ()=>{
        console.log("Abort");
    }
    xhr.ontimeout = ()=>{
        console.log("Timeout");
    }
    xhr.send();

}