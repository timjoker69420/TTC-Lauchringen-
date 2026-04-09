// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Set active nav link
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === window.location.pathname.split('/').pop() ||
      (window.location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html')) {
    a.classList.add('active');
  }
});

// Fade-in observer
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      fadeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => fadeObs.observe(el));
