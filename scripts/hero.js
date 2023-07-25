```javascript
let currentSlide = 0;
const heroSlides = document.querySelectorAll('#hero-section .slide');

function initHeroSlides() {
  showSlide(currentSlide);
}

function showSlide(n) {
  if (n >= heroSlides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = heroSlides.length - 1;
  } else {
    currentSlide = n;
  }

  heroSlides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });

  document.dispatchEvent(new CustomEvent('heroSlideChanged', { detail: { currentSlide } }));
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.querySelector('#hero-section .next').addEventListener('click', nextSlide);
document.querySelector('#hero-section .prev').addEventListener('click', prevSlide);

initHeroSlides();
```