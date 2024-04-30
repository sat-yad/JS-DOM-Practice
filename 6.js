// 6. Create a tabbed interface where clicking  on tabs display different content  sections without page reload

// make this code efficine tand remove duplikacy

var about = document.querySelector("#about");
var home = document.querySelector("#home");
var contact = document.querySelector("#contact");

var abouttext = document.querySelector("#abouttext");
var hometext = document.querySelector("#hometext");
var contacttext = document.querySelector("#contacttext");

hometext.style.display = "block";
hometext.style.width = "60%";

home.addEventListener("click", function () {
  removeall();
  hometext.style.display = "block";
  hometext.style.width = "60%";
});

about.addEventListener("click", function () {
  removeall();
  abouttext.style.display = "block";
  abouttext.style.width = "60%";
});

contact.addEventListener("click", function () {
  removeall();
  contacttext.style.display = "block";
  contacttext.style.width = "60%";
});

function removeall() {
  document.querySelectorAll("h3").forEach(function (h3) {
    h3.style.display = "none";
  });
}
