// 2. Create a image with 2 images and a button.When the button is clicked,swap the source attribute of the image
var btn = document.querySelector("button");
var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");

btn.addEventListener("click", function () {
  var s1 = img1.src;
  var s2 = img2.src;
  img1.src = s2;
  img2.src = s1;
});
