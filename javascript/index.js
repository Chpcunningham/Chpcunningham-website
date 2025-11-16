let linkedin = document.getElementById("linkedin");
let github = document.getElementById("github");
let email = document.getElementById("email");
let resume = document.getElementById("resume");


linkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/chpcunningham", "_blank");
});

github.addEventListener("click", function(){
    window.open("https://github.com/Chpcunningham", "_blank");
});

instagram.addEventListener("click", function(){
    window.open("mailto:chpcunningham@gmail.com", "_blank");
})
resume.addEventListener("click", function() {
    window.open("Files/ConnorCunninghamCV.pdf", "_blank");
})

//Slider Logic
;(function(){
    const mq = window.matchMedia('(max-width: 1023px)');
    let enabled = false;

    let prev, next, inner;
    let onPrev, onNext, onPointerDown, onPointerMove, onPointerUp, onPointerCancel;
    let isDown = false, startX = 0, scrollLeft = 0;

    const getSlideWidth = () => {
        const slide = inner.querySelector('.project-slide');
        if (!slide) return inner.clientWidth;
        const style = window.getComputedStyle(inner);
        const gap = parseInt(style.gap || 20, 10) || 20;
        return slide.getBoundingClientRect().width + gap;
    }

    function enableSlider() {
        if (enabled) return;
        prev = document.querySelector('.slider-btn.prev');
        next = document.querySelector('.slider-btn.next');
        inner = document.querySelector('.projects-slider-inner');
        if (!inner || !prev || !next) return; // nothing to do

        onPrev = () => inner.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
        onNext = () => inner.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });

        prev.addEventListener('click', onPrev);
        next.addEventListener('click', onNext);

        // pointer handlers
        onPointerDown = (e) => {
            if (e.target && e.target.closest && e.target.closest('a')) return;
            isDown = true;
            try { inner.setPointerCapture(e.pointerId); } catch (err) {}
            startX = e.clientX;
            scrollLeft = inner.scrollLeft;
        };
        onPointerMove = (e) => {
            if (!isDown) return;
            const x = e.clientX;
            const walk = (startX - x);
            inner.scrollLeft = scrollLeft + walk;
        };
        onPointerUp = (e) => { isDown = false; try { inner.releasePointerCapture(e.pointerId); } catch(err){} };
        onPointerCancel = () => { isDown = false; };

        inner.addEventListener('pointerdown', onPointerDown);
        inner.addEventListener('pointermove', onPointerMove);
        inner.addEventListener('pointerup', onPointerUp);
        inner.addEventListener('pointercancel', onPointerCancel);

        enabled = true;
    }

    function disableSlider() {
        if (!enabled) return;
        if (prev && onPrev) prev.removeEventListener('click', onPrev);
        if (next && onNext) next.removeEventListener('click', onNext);
        if (inner) {
            inner.removeEventListener('pointerdown', onPointerDown);
            inner.removeEventListener('pointermove', onPointerMove);
            inner.removeEventListener('pointerup', onPointerUp);
            inner.removeEventListener('pointercancel', onPointerCancel);
        }

        // reset state
        isDown = false;
        startX = 0;
        scrollLeft = 0;
        prev = next = inner = null;
        onPrev = onNext = onPointerDown = onPointerMove = onPointerUp = onPointerCancel = null;
        enabled = false;
    }

    // initialize based on current viewport
    if (mq.matches) enableSlider();

    // listen for breakpoint changes
    if (mq.addEventListener) {
        mq.addEventListener('change', (e) => {
            if (e.matches) enableSlider(); else disableSlider();
        });
    } else if (mq.addListener) {
        mq.addListener((e) => { if (e.matches) enableSlider(); else disableSlider(); });
    }

})();