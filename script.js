const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const services = {
  overnight: {
    title: 'Overnight Pet Care',
    text: 'In-home overnight care keeps your pet comfortable, loved, and close to their regular routine while you are away. Includes updates, companionship, potty breaks, feeding, light home care, and lots of love.'
  },
  constant: {
    title: '24/7 Constant Care',
    text: 'For pets who need extra supervision, companionship, or support. This is best for pets with anxiety, medical needs, senior care needs, or families who prefer more consistent presence.'
  },
  dropin: {
    title: 'Drop-In Visits',
    text: 'Perfect for potty breaks, meals, medications, playtime, and check-ins. Visits are personalized around your pet’s routine and comfort level.'
  },
  special: {
    title: 'Special Needs Care',
    text: 'Thoughtful support for puppies, seniors, mobility needs, anxiety, medication routines, and pets who need a little extra patience and attention.'
  }
};
const serviceCards = document.querySelectorAll('.service-card');
const serviceDetail = document.getElementById('serviceDetail');
serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    serviceCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const item = services[card.dataset.service];
    serviceDetail.style.opacity = '0';
    setTimeout(() => {
      serviceDetail.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
      serviceDetail.style.opacity = '1';
    }, 180);
  });
});

const slides = [...document.querySelectorAll('.testimonial-card')];
let currentSlide = 0;
function showSlide(next){
  if(!slides.length) return;
  slides[currentSlide].classList.remove('active');
  currentSlide = (next + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}
document.querySelector('.next')?.addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
if(slides.length > 1){ setInterval(() => showSlide(currentSlide + 1), 6500); }

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
