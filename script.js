// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Hero slider
const slides = document.querySelectorAll('.hero-slider .slide');
let current = 0;

function nextSlide() {
  const previous = current;
  current = (current + 1) % slides.length;

  slides[previous].classList.remove('active');
  slides[previous].classList.add('exit-left');

  slides[current].classList.add('active');

  setTimeout(() => {
    slides.forEach((slide, index) => {
      if(index !== current) {
        slide.classList.remove('exit-left');
      }
    });
  }, 1000);
}

setInterval(nextSlide, 3000);

// Dark/light mode toggle
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('modeIcon');
  icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
