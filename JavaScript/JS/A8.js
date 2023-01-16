document.getElementById("btnajax").addEventListener("click", makeRequest);
let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");
function makeRequest(){
    console.log("Button Clicked");
    const  xhr = new XMLHttpRequest();
    xhr.open("GET", "data2.xml", true);
    xhr.responseType = "document";
    xhr.onload = ()=>{
        if(xhr.status === 200){
           console.log(xhr.response);
           console.log(xhr.response.getElementsByTagName("student"));
           let s1 = xhr.response.getElementsByTagName("student");


        //    console.log(s1[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);
        //    console.log(s1[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue);

            n.innerText = s1[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            r.innerText = s1[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue;

        //    console.log(s1[1].getElementsByTagName("name")[0].childNodes[0].nodeValue);
        //    console.log(s1[1].getElementsByTagName("roll")[0].childNodes[0].nodeValue);
           
        }else{
            console.log("Problem Occured");
        }
    }
    
    xhr.send();

}
