const staffSLider = new Swiper('.staffSlider', {
    slidesPerView: 1,
    breakpoints: {
        1400: {
            slidesPerView: 2    ,
            spaceBetween: 20
        }
    }
})

const newsSlider = new Swiper('.newsSlider', {
    slidesPerView: 1,
    breakpoints: {
        1300: {
            slidesPerView: 3     ,
            spaceBetween: 20
        },
        800:{
            slidesPerView: 2     ,
            spaceBetween: 20
        }
    }
})

const reviewSlider = new Swiper('.reviewSlider', {
    slidesPerView: 1,
    breakpoints: {
        1300: {
            slidesPerView: 3     ,
            spaceBetween: 20
        },
        800:{
            slidesPerView: 2     ,
            spaceBetween: 20
        }
    }
})

const studentReviewsSlider = new Swiper('.studentReviewsSlider', {
    slidesPerView: 1,
    breakpoints: {
        1300: {
            slidesPerView: 3     ,
            spaceBetween: 20
        },
        800:{
            slidesPerView: 2     ,
            spaceBetween: 20
        }
    }
})
