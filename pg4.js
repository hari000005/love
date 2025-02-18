

// setTimeout(() => {

//     function hi() {
        
// document.getElementById('myAudio').play()
   
// }hi()
    
// },100);

function tap() {
    document.getElementById('myAudio').play()
}

//     window.onload = function() {
//     var audio = document.getElementById('myAudio');
//     audio.play();
// };

// Function to move the button randomly
function moveButtonRandomly() {
    const button = document.getElementById('noButton');

    // Get the viewport width and height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the button's dimensions
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Generate random positions within the viewport, accounting for the button's size
    const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

    // Set the new position of the button
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Add the touch or click event listener to the "No" button
document.getElementById('noButton').addEventListener('click', moveButtonRandomly);
document.getElementById('noButton').addEventListener('touchstart', moveButtonRandomly);

// *****************************

    // Get elements
const sentences = document.querySelectorAll('.sentence');  // All sentences
const showNextBtn = document.getElementById('noButton'); // Button

let currentSentence = 0; // Start with the first sentence

// Function to show the next sentence
function showNextSentence() {
if (currentSentence < sentences.length) {
// Hide the current sentence
if (currentSentence > 0) {
    sentences[currentSentence - 1].style.display = 'none';
}

// Show the next sentence
sentences[currentSentence].style.display = 'block';
currentSentence++;
}

// Disable the button if all sentences are shown
if (currentSentence === sentences.length) {
showNextBtn.disabled = true;
showNextBtn.remove();
}
}

// Event listener for the button
showNextBtn.addEventListener('click', showNextSentence);

// ****************************************************

// Get the elements
const noButton = document.getElementById('noButton');
const gifContainer = document.getElementById('gifContainer');
const gif = document.getElementById('gif');

// Event listener for the "No" button click
noButton.addEventListener('click', () => {
// Toggle the visibility of the GIF
gifContainer.style.display = 'block';  // Show GIF
});

// Optional: If you want to hide the GIF again after a certain time (e.g., 5 seconds)
function call(){
setTimeout(() => {
gifContainer.style.display = 'none';  // Hide GIF after 5 seconds
}, 2000);
}


