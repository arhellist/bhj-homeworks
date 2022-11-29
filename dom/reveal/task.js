const reveal = document.querySelectorAll('.reveal');

reveal.forEach((el, index) => {
    window.addEventListener("scroll", () => {
        if (el.getBoundingClientRect().top <= 900) {
            el.classList.add('reveal_active');
        }
    });
});