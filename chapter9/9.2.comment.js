var strong = document.querySelectorAll("strong")[0];
var allow_submit = true;

function lengthCheck() {
  var value = this.getAttribute("value");
  if (value.length > 10) {
    strong.innerHTML = "Comment too long!";
  }

  allow_submit = value.length < 10;
  if (!allow_submit) {
    //
  }
}

var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keydown", lengthCheck);
}

var form = document.querySelectorAll("form")[0];
form.addEventListener("submit", function (e) {
  if (!allow_submit) e.preventDefault();
});


info = document.createElement("p");
info.innerHTML = "yee";
ret = form.appendChild(info);

wee = document.createElement("span")
wee.innerHTML = "wee"
rett = form.insertBefore(wee, info)
