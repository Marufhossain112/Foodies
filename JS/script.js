// toggle hamburger menu
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// toggle active class when clicking navbar items
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        navItems.forEach(f =>
            f.classList.remove('active'));
        e.target.classList.toggle("active");
    })
})