
 

 function a1(){
  var a =  prompt("Enter Your Lucky Number");
  var b =Number(a); 

  if ((b>=0 || b<=100)){       
  }
  else{
   alert("Invalid input..?")
     a1()
  }
}  a1()

// -------------------------------

var a1 = document.getElementById("emoji")

function eye(){
   a1.style.display="block"
} 

// ------------------------------

setTimeout(() => {
var gif1 = document.getElementById("crk2");
gif1.style.display = "block";
gif1.src = gif1.src+ "?t=" + new Date().getTime();

}, 2450);
setTimeout(() => {
document.getElementById("crk1").style.display="none"
}, 2450);

setTimeout(() => {
 document.getElementById("crk2").style.display="none"
}, 4900);
setTimeout(() => {
var gif1 = document.getElementById("crk3");
gif1.style.display = "block";
gif1.src = gif1.src+ "?t=" + new Date().getTime();

}, 4900);
setTimeout(() => {
 document.getElementById("crk3").style.display="none"
},6350);

//---------------------------- SAVE IN SESSION--------------
// function saveValue() {


//   sessionStorage.setItem("savedValue",document.getElementById("floatingInput").value);
//   window.location.href = "file:///C:/Users/harih/OneDrive/Desktop/html/love/Proposal/pg2.html";

// }

function saveValue() {

let a = document.getElementById("floatingInput").value;
if(a){


 console.log("this is If");
 


 

sessionStorage.setItem("savedValue", document.getElementById("floatingInput").value);
window.location.href = "./page2.html";  // This will redirect to pg2.html 


}

else{

 console.log("this is else");
 
 document.getElementById("labl").style.color = "red";
}

}


//

