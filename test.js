function lengthCheck() {
  var name = this.getAttribute("name");
  var value = this.getAttribute("value");
  if (value.length > 10) {
    console.log("Input " + name + " has too much text.");
  }
}
var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keydown", lengthCheck);
}

var divs = document.querySelectorAll("div");
for (var i = 0; i < divs.length; i++) {
  console.log(divs[i]);
  divs[i].innerHtml = "world";
}
