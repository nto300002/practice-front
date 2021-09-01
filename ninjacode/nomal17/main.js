let addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", function() {
  let boxes = document.getElementById("boxes");
  let clone = boxes.firstElementChild.cloneNode(true);
  boxes.appendChild(clone);
});
// https://www.imamura.biz/blog/26914
