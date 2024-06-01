document.querySelector('.staff__filter').addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;

    let filterClass = event.target.dataset['f'];
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(slide => {
        const box = slide.querySelector('.staff__box');
        if (!box.classList.contains(filterClass)) {
            slide.classList.add("hide");
        } else {
            slide.classList.remove("hide");
        }
    });
});