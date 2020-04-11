// Detecting button press

var numberOfKeys = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfKeys; i++) {

  document.querySelectorAll(".key")[i].addEventListener("click", function() {

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);



  });

}

//Detecting Keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

});

function makeSound(key) {

  switch (key) {
    case "a":
      var crash = new Audio("sounds/c.mp3");
      crash.play();
      break;

    case "s":
      var kick = new Audio("sounds/d.m4a");
      kick.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/e.m4a");
      tom1.play();
      break;

    case "f":
      var tom2 = new Audio("sounds/f.m4a");
      tom2.play();
      break;

    case "g":
      var tom3 = new Audio("sounds/g.m4a");
      tom3.play();
      break;

    case "h":
      var tom4 = new Audio("sounds/a.m4a");
      tom4.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/b.m4a");
      tom4.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/c2.m4a");
      tom4.play();
      break;



    default:

  }

}
