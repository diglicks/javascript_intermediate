var list = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass"
}

var buttons = document.querySelectorAll("button");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playsound(this.innerHTML);
  });
}

function playsound (key){
  var sound = new Audio("sounds/" + list[key] + ".mp3");
  sound.play();
}

document.addEventListener("keydown", function(event) {
  if (event.key in list) {
    playsound(event.key);
  }
  else {
    console.log(event.key);
  }
})
