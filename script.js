// Smooth Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offset = 200; // You can adjust this value as needed
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar Scroll Spy
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

function activateNavLink() {
  const offset = 100; // This offset should match the one in the smooth scroll
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - offset) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNavLink);
window.addEventListener('load', activateNavLink);