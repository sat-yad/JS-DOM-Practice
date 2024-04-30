// 8. Create a search bar that display a live search results  as users  type , updating the results without  requiring  a full page  reload

var input = document.querySelector("input");
var data = [
  {
    name: "Meghna",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Meghan",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Manish",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Manisha",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Monish",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mayank",
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var pers = "";
data.forEach(function (ele) {
  pers += `<div class="person">
            <div class="img">
              <img src="${ele.src}" alt="">
            </div>
            <h4>${ele.name}</h4>
          </div>`;
});
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
  var matching = data.filter(function (ele) {
    return ele.name.startsWith(input.value);
  });
  var newusers = "";
  matching.forEach(function (ele) {
    newusers += `<div class="person">
            <div class="img">
              <img src="${ele.src}" alt="">
            </div>
            <h4>${ele.name}</h4>
          </div>`;
  });
  document.querySelector(".people").innerHTML = newusers;
});
