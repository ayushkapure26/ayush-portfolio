const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove',(e)=>{
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});