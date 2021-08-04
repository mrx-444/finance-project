let date = new Date();
let getValue = document.getElementById("getDate").textContent;
document.getElementById("getDate").innerText =  getValue + " " + date.getFullYear();

const mobileBtnOpen = document.getElementById("mobile-menu-id");
let nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit-id");
    mobileBtnOpen.addEventListener("click", () => {
      nav.classList.add("menu-btn");
    });
    mobileBtnExit.addEventListener("click", () => {
      nav.classList.remove("menu-btn");
    });


function runLeft() {
  document.getElementById("ulswipe").style.justifyContent = "left";
  document.getElementById("swipe-left").style.color = "black";
  document.getElementById("swipe-center").style.color = "white";
  document.getElementById("swipe-flexend").style.color = "white";
}
function runCenter() {
  document.getElementById("ulswipe").style.justifyContent = "center";
  document.getElementById("swipe-left").style.color = "white";
  document.getElementById("swipe-center").style.color = "black";
  document.getElementById("swipe-flexend").style.color = "white";
}
function runFlexEnd() {
  document.getElementById("ulswipe").style.justifyContent = "flex-end";
  document.getElementById("swipe-left").style.color = "white";
  document.getElementById("swipe-center").style.color = "white";
  document.getElementById("swipe-flexend").style.color = "black";
} 
