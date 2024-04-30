// 1. Create a HTML page wih a button.When the button is clicked,changed the text of a paragraph element.

var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click", function () {
  p.textContent = "it changed on click";
});

// btn.addEventListener("mouseover", function () {
//   p.textContent = "it changed on click";
// });
// btn.addEventListener("mouseleave", function () {
//   p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing.";
// });
