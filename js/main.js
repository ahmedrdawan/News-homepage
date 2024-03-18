const openMune = document.querySelector(".open")
const closeMune = document.querySelector(".close")
const ul = document.querySelector("ul")

openMune.onclick = function() {
  openMune.style.display = "none";
  closeMune.style.display = "block";
  ul.style.display = "flex";
}
closeMune.onclick = function() {
  openMune.style.display = "block";
  closeMune.style.display = "none";
  ul.style.display = "none";
}