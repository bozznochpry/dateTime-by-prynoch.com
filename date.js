const paragraph = document.querySelector("p");

// setInterval
setInterval(function(){
    let d = new Date().toLocaleTimeString();
    paragraph.innerHTML = d;
}, 1000);