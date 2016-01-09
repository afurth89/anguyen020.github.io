var main = document.getElementsByTagName('main')[0],
    newSpan,
    text = "everything is awesome!!!",
    len = text.length;

  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame;

//  Wrap each letter in span tag
for (var i = 0; i < len; i++) {
  newSpan = document.createElement('span');
  newSpan.innerHTML = text[i];
  main.appendChild(newSpan);
}

//  Set the animation delay for all of the letters
var spans = document.getElementsByTagName("span"),
    delay = 0;

for (var i = 0; i < spans.length; i++) {
  spans[i].style["animation-delay"] = delay.toString() + "s";
  delay += .05;
};

//  Ranomize colors
function getRandomColor() {
  function c() {
    return Math.floor(Math.random() * 256).toString(16)
  }

  return "#" + c() + c() + c();
}

function update() {
  for (var i = 0; i < len; i++) {
    spans[i].style.color = getRandomColor();
  }
}

update();
setInterval(update, 200);
