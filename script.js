const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

menuBtn?.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
