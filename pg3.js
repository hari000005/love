


function load() {
var audio = document.getElementById('myAudio');
audio.play(); } load()

var a1 =document.getElementById("dialoge");
var nxtPage = 0;

function nxt(){



if(nxtPage == 0){
    console.log("hi");
    a1.style.display = "block"
    nxtPage++;
}
else{
    window.location.href ="./pg4.html";
}
}

