// Мобилно меню
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Бутон „към началото“
const toTop = document.querySelector('.to-top');
const onScroll = () => toTop.classList.toggle('is-visible', window.scrollY > 600);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Текуща година във футъра
document.getElementById('year').textContent = new Date().getFullYear();
