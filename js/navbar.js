//gets header elements
const toggleButton = document.getElementById("toggle");
const navLinks = document.getElementById("header-nav");
const callButton = document.getElementById("header-button");

//hamburger click event
toggleButton.addEventListener("click", () => {
  //console.log("toggle listener is here!");
  navLinks.classList.toggle("active");
  callButton.classList.toggle("active-button");
});
