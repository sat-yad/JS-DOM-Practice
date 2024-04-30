// 3.Create a form  with input fields and a submit button .Use JS  to validate the form and display an error message if the input  is invalid

// jab bhi forms ke sath deal kro yaad rakkho ki submit hone par forms page ko reload kr dete hai ,tumhe yaad rakhna hai ki pages reload naah ho nhi to agar page reload hua to js nhi chalega kyuki js chal paye usse pehle hi page reload ho chuka hoga

// form ko submit krne par reload se rokne ke liye
// var form = document.querySelector("form");
// var np1 = document.querySelector("#input1");
// var np2 = document.querySelector("#input2");
// var np3 = document.querySelector("#input3");
// var np4 = document.querySelector("#input4");
// var inps = document.querySelectorAll('input[type="text"]');
// form.addEventListener("submit", function (ev) {
//   ev.preventDefault();
// console.log("Name:", np1.value);
// console.log("Email:", np2.value);
// console.log("Age:", np3.value);
// console.log("Gender:", np4.value);
// if (
//   np1.value == "" ||
//   np2.value == "" ||
//   np3.value == "" ||
//   np4.value == ""
// ) {
//   alert("some field are empty");
// }
// if (inps.value == "") alert("some field are empty,plz fill it");
// });
var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  for (var i = 0; i < inps.length; i++) {
    if (inps[i].value === "") {
      alert("some field are empty");
    }
  }
});
