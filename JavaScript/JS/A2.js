document.getElementById("btnajax").addEventListener("click", makeRequest);

function makeRequest(){
    console.log("Button Clicked");
    const xhr =  new XMLHttpRequest();
    if(xhr.readyState === 0){
        console.log("Open method not yet Called 0");
    }
    xhr.open("GET", "data.txt", true);
    if(xhr.readyState === 1){
        console.log("Open method Called 1");
    }
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 2){
            console.log("Response Header 2");
        }
        if(xhr.readyState === 3){
            console.log("Loading... 3");
        }
        if(xhr.readyState === 2){
            console.log("Done 4");
        }
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
            }else{
                console.log("Problem with Request");
            }
        }
    }
    xhr.send();
}