document.getElementById('year').textContent=new Date().getFullYear();

const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach((el)=>revealObserver.observe(el));

const filters=document.querySelectorAll('.filter');
const projects=document.querySelectorAll('.project-card');
filters.forEach((button)=>{
  button.addEventListener('click',()=>{
    filters.forEach((item)=>item.classList.remove('active'));
    button.classList.add('active');
    const filter=button.dataset.filter;
    projects.forEach((project)=>{
      const show=filter==='all'||project.dataset.category===filter;
      project.classList.toggle('hidden',!show);
    });
  });
});

const glow=document.querySelector('.cursor-glow');
if(glow&&matchMedia('(pointer:fine)').matches){
  addEventListener('pointermove',(event)=>{
    glow.style.left=`${event.clientX}px`;
    glow.style.top=`${event.clientY}px`;
  },{passive:true});
}

const tilt=document.querySelector('.tilt-card');
if(tilt&&matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  tilt.addEventListener('pointermove',(event)=>{
    const rect=tilt.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    tilt.style.transform=`rotateY(${x*10}deg) rotateX(${y*-10}deg) translateY(-3px)`;
  });
  tilt.addEventListener('pointerleave',()=>{tilt.style.transform='';});
}
