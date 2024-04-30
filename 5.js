// 5. Build a countdown timer that starts when a button is clicked and updates the display in real-time
var start = document.querySelector("#Start");
var stop = document.querySelector("#Stop");
var h3 = document.querySelector("h3");
var cnt = 0;
var x;

start.addEventListener("click", function () {
  x = setInterval(function () {
    h3.textContent = cnt;
    cnt++;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(x);
});
