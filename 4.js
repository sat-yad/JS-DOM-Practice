// 4.Create a unorderedlist.Allow users to add and remove list items dynamically using buttons
// var list = document.querySelector("ul");
var btn1 = document.querySelector("#Add");
var btn2 = document.querySelector("#Remove");
var inp = document.querySelector("input");
// var lii = document.createElement("li");
var li;
var ul = document.querySelector("ul");

btn1.addEventListener("click", function () {
  if (inp.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = inp.value;
    // console.log(li);
    ul.appendChild(li);
    inp.value = "";
  }
});
btn2.addEventListener("click", function () {
  ul.removeChild(li);
});
