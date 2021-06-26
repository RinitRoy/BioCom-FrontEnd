$('.one-row-carousel').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows : false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
})



$('.two-row-carousel').slick({
    infinite: false,
    speed: 300,
    rows: 2,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows : false
})