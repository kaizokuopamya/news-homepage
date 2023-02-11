const menuIcon = document.querySelector(".navbar-hamburger");
const closeIcon = document.querySelector(".nav-close");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.add("nav-menu--visible");
  addOverlay();
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu--visible");
  removeOverlay();
});

function addOverlay() {
  if (!document.body.contains(document.querySelector(".overlay"))) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    document.body.append(overlayElement);
  }
}
function removeOverlay() {
  if (document.body.contains(document.querySelector(".overlay"))) {
    document.querySelector(".overlay").remove();
  }
}
