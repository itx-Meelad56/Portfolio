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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");  // remove class when out of view
    }
  });
});

const skills = document.querySelectorAll('.skill');
skills.forEach(skill => observer.observe(skill));

