// 7.Display a progress bar  that updates  in real-time ,showing  the progress  of a task ,download,or form submission

var prg = document.querySelector("#progress");
var prgtxt = document.querySelector("#progress-text");
var h3 = document.querySelector("h3");

var cnt = 0;
let val = prompt("Enter the rate in milisecond");
var x = setInterval(function () {
  if (cnt > 99) {
    h3.textContent = "Downloaded";
    clearInterval(x);
  } else {
    cnt++;
  }
  prg.style.width = cnt + "%";
  prg.textContent = cnt + "%";
}, val);
