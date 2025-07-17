const navbar = document.querySelector('.nav-bar');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


