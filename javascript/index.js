let linkedin = document.getElementById("linkedin");
let github = document.getElementById("github");
let instagram = document.getElementById("instagram");
let resume = document.getElementById("resume");


linkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/chpcunningham", "_blank");
});

github.addEventListener("click", function(){
    window.open("https://github.com/Chpcunningham", "_blank");
});

instagram.addEventListener("click", function(){
    window.open("", "_blank");
})
resume.addEventListener("click", function() {
    window.open("Files/ConnorCunninghamCV.pdf", ":_blank");
})

/* Projects slider logic */
;(function(){
    const prev = document.querySelector('.slider-btn.prev');
    const next = document.querySelector('.slider-btn.next');
    const inner = document.querySelector('.projects-slider-inner');
    if (!inner || !prev || !next) return;

    const getSlideWidth = () => {
        const slide = inner.querySelector('.project-slide');
        if (!slide) return inner.clientWidth;
        const style = window.getComputedStyle(inner);
        const gap = parseInt(style.gap || 20, 10) || 20;
        return slide.getBoundingClientRect().width + gap;
    }

    prev.addEventListener('click', () => {
        inner.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
    });
    next.addEventListener('click', () => {
        inner.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
    });

    // Allow dragging on desktop/touch swipe on mobile
    let isDown = false, startX, scrollLeft;
    inner.addEventListener('pointerdown', (e) => {
        isDown = true;
        inner.setPointerCapture(e.pointerId);
        startX = e.clientX;
        scrollLeft = inner.scrollLeft;
    });
    inner.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        const x = e.clientX;
        const walk = (startX - x);
        inner.scrollLeft = scrollLeft + walk;
    });
    inner.addEventListener('pointerup', (e) => { isDown = false; inner.releasePointerCapture(e.pointerId); });
    inner.addEventListener('pointercancel', () => { isDown = false; });
})();