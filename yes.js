
function letsplay(){
  document.getElementById("background-music").play();
}
  // Automatically play background music when the page loads
// window.onload = () => {
//   const music = document.getElementById("background-music");
//   music.play();
// };

// Handle the "Yes" button click
document.getElementById("yes-btn").addEventListener("click", () => {
// Hide the landing page and show the acceptance page
document.querySelector(".landing-page").style.display = "none";
document.getElementById("acceptance-page").style.display = "block";
});

