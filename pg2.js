
let b = sessionStorage.getItem("savedValue");

if (b) {
    document.getElementById("userName").innerText = b;
    
}
else{
    document.getElementById("userName").innerText = "guest" ;

}


const  a1 =  document.getElementById("noButt");

var b1 = document.getElementById("no")

a1.addEventListener('mouseover',function () {
b1.style.display = "block";
})
a1.addEventListener('mouseout',function () {
b1.style.display = "none";
})

const  a2 =  document.getElementById("yesButt");

var b2 = document.getElementById("yes")

a2.addEventListener('mouseover',function () {
b2.style.display = "block";
})
a2.addEventListener('mouseout',function () {
b2.style.display = "none";
})
// -----------------------------------------------------------------------------------------



var a3 =  document.getElementById("parent1");

var img1 = document.getElementById("spimg")

function on() {
img1.style.display ="none"
a3.style.display="block"
let child = document.getElementById("bg-audio");
child1.style.display ="none"
let audio = document.getElementById("bg-audio");
audio.play();

}
function delayRedirect(event) {
event.preventDefault(); 
setTimeout(function() {
window.location.href="./pg3.html";
}, 2000);
}
function delayRedirect1(event) {
event.preventDefault(); 
setTimeout(function() {
window.location.href="./yes.html";
}, 2000);
}
