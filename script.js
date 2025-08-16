// Smooth Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar Scroll Spy
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

function activateNavLink() {
  let index = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    if (window.scrollY + 100 < sections[i].offsetTop) {
      index = i - 1;
      break;
    }
  }
  navLinks.forEach(link => link.classList.remove('active'));
  if (index >= 0) navLinks[index].classList.add('active');
}

window.addEventListener('scroll', activateNavLink);
window.addEventListener('load', activateNavLink);