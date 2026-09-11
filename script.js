const loader = document.getElementById('loader');
const loadCount = document.getElementById('loadCount');
let progress = 0;
const timer = setInterval(() => {
  progress += Math.floor(Math.random() * 14) + 6;
  if (progress >= 100) {
    progress = 100;
    clearInterval(timer);
    setTimeout(() => loader?.classList.add('hide'), 250);
  }
  if (loadCount) loadCount.textContent = String(progress).padStart(2, '0');
}, 85);

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const photo = document.querySelector('.photo-card');
window.addEventListener('pointermove', (e) => {
  if (!photo || window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 4;
  const y = (e.clientY / window.innerHeight - 0.5) * -4;
  photo.style.transform = `rotate(3.5deg) translate(${x}px, ${y}px)`;
});
