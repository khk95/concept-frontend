$(function(){
    const owl = $('.owl-carousel-slides');
    owl.owlCarousel({
        loop:false,
        nav:false,
        dots:false,
        autoplay:false,
        smartSpeed:450,
        mouseDrag:true,
        touchDrag:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                margin: 30
            },
            1300: {
                items: 3,
                stagePadding:300,
                margin: 50
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('prev.owl');
        } else {
            owl.trigger('next.owl');
        }
        e.preventDefault();
    });

    $('.owl-carousel-phone').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        autoplay:true,
        animateOut:'fadeOutDown',
       animateIn:'fadeInDown',
        smartSpeed:450,
        mouseDrag:false,
        touchDrag:false
    })
});