
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const slides = [...document.querySelectorAll('.testimonial-card')];
let current = 0;
function showSlide(index){
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
}
document.querySelector('.next')?.addEventListener('click', () => showSlide(current + 1));
document.querySelector('.prev')?.addEventListener('click', () => showSlide(current - 1));
setInterval(() => showSlide(current + 1), 6500);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
