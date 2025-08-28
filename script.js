// Mobile menu toggle
const openBtn = document.getElementById('openMenu');
const mobileMenu = document.getElementById('mobileMenu');
openBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const root = document.documentElement;
const applyTheme = (dark) => dark ? root.classList.add('dark') : root.classList.remove('dark');
applyTheme(localStorage.getItem('theme') === 'dark');
const swap = () => {
  const isDark = !root.classList.contains('dark');
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
themeToggle.addEventListener('click', swap);
themeToggleMobile.addEventListener('click', swap);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
