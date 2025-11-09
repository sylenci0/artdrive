$(document).ready(function () {
    const slides = $('.slides');
    const total = $('.slide').length;

    // Clonar la primera slide
    slides.append($('.slide').eq(0).clone());

    let index = 0;
    const slideWidth = 100;
    let slideInterval;

    function cambiarSlide() {
        index++;
        slides.css('transition', 'transform 1s ease-in-out');
        slides.css('transform', `translateX(${-index * slideWidth}%)`);

        slides.off('transitionend').on('transitionend', function () {
            if (index === total) {
                slides.css('transition', 'none');
                index = 0;
                slides.css('transform', `translateX(0%)`);
            }
        });
    }

    function iniciarSlider() {
        clearInterval(slideInterval);
        slideInterval = setInterval(cambiarSlide, 4000);
    }

    function detenerSlider() {
        clearInterval(slideInterval);
    }

    iniciarSlider();

    document.addEventListener('visibilitychange', function () {
        document.visibilityState === 'visible' ? iniciarSlider() : detenerSlider();
    });

    window.addEventListener('focus', iniciarSlider);
    window.addEventListener('blur', detenerSlider);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    const btn = document.getElementById("btnTop");
    if (document.documentElement.scrollTop > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

window.addEventListener('load', () => {
    const items = document.querySelectorAll('.galeria-categoria-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 150);
    });
  });

document.getElementById("btnTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
        
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('open');
        const answer = question.nextElementSibling;

        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
        } else {
            answer.classList.add('open');
        }
    });
});