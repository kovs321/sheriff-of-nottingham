const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

requestAnimationFrame(() => {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('nav a')];
const observer = new IntersectionObserver((entries) => {
  const current = entries.find((entry) => entry.isIntersecting);
  if (!current) return;
  links.forEach((link) => link.classList.toggle('active', link.hash === `#${current.target.id}`));
}, { rootMargin: '-35% 0px -60%' });
sections.forEach((section) => observer.observe(section));
