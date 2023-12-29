

const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const navLinks = document.querySelectorAll('.nav-link');

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);


// Add click event listener to each 'nav-link' element
navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    // Remove 'active-link' class from the element with class 'active-link'
    var activeLink = document.querySelector('.active-link');
    if (activeLink) {
      activeLink.classList.remove('active-link');
    }

    // Add 'active-link' class to the clicked 'nav-link' element
    this.classList.add('active-link');
  });
});
