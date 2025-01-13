const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#kopimenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar side bar untuk
const menu = document.querySelector("#kopimenu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
