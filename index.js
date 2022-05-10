// Obtaining all of drum element from HTML
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Looping through all of drum buttons to give them event listener
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Obtaining the button's innerHTML
    var buttonInnerHTML = this.innerHTML;

    // Play sound by clicking the button
    playSound(buttonInnerHTML);

    buttonAnimation(this.innerHTML);
  });
}

// Play sound by pressing the key
document.addEventListener("keypress", function (event) {
  var keyPressed = event.key.toLowerCase();

  playSound(keyPressed);

  buttonAnimation(keyPressed);
});

// Function to play sound
function playSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      alert("Not a valid button");
  }
}

// Add button animation
function buttonAnimation(currentKey) {
  var pressedKey = document.querySelector("." + currentKey);
  pressedKey.classList.add("pressed");
  setTimeout(function () {
    pressedKey.classList.remove("pressed");
  }, 100);
}
