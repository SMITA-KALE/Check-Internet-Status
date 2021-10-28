const checkStatus = document.querySelector(".checkStatus");

const online = () =>{
    checkStatus.innerText = "Connection Available";
    checkStatus.style.backgroundColor = "#77D970";
    
};

const offline = () =>{
    checkStatus.innerText = "No Connection";
    checkStatus.style.backgroundColor = "#E02401";

};

if(window.navigator.onLine){
    online();
}else{
    offline();
}

window.addEventListener("online",online);
window.addEventListener("offline",offline);