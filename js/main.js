document.getElementById("year").textContent = new Date().getFullYear()



document.addEventListener('DOMContentLoaded', function () {
  // Select all rows and cards
  const rows = document.querySelectorAll('.row');
  const cards = document.querySelectorAll('.card');

  // Create the observer for rows with staggered effect
  const rowObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);  // Stagger the effect by 100ms per row
      }
    });
  }, { threshold: 0.1 });

  // Create the observer for cards
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Observe all rows
  rows.forEach(row => {
    rowObserver.observe(row);
  });

  // Observe all cards
  cards.forEach(card => {
    cardObserver.observe(card);
  });
});







const carousel = document.querySelector('.carousel')
const arrowBtns = document.querySelectorAll('.wrapper i')
const firstCardWidth = carousel.querySelector('.card').offsetWidth;


let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn =>{
   btn.addEventListener('click', () => {
       carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
   })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
