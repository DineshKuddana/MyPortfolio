const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
}); 



//On clicking a button

document.getElementById("book").addEventListener("click", function() {
    var targetSection = document.getElementById("services");

    targetSection.scrollIntoView({ behavior: "smooth" });
});


document.getElementById("started").addEventListener("click", function() {
    var targetSection = document.getElementById("works");

    targetSection.scrollIntoView({ behavior: "smooth" });
});







