// 9. Build a Character Counter for a text area  or input field, which update in real-time and users types  and  enforces  a character limits

var textarea = document.querySelector("textarea");

var h3 = document.querySelector("h3");
textarea.addEventListener("input", function () {
  var len = textarea.value.length;
  h3.textContent = `Character Count: ${len}`;
});
