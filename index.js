// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to update link colors with random colors
  function updateLinkColors() {
    var navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach(function(link) {
      link.style.color = getRandomColor();
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var navbarToggle = document.getElementById("navbar-toggle");
    var navList = document.getElementById("nav-list");
  
    // Apply random colors to navigation links initially
    updateLinkColors();
  
    // Set interval to update link colors every 5 seconds (adjust as needed)
    setInterval(updateLinkColors, 2000);
  
    navbarToggle.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  });
  


  