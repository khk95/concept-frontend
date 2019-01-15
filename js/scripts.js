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
$(function(){
    console.log('init');

    $('.item').on('click', function(){
        $('.modal').modal('toggle');
    });
});
$(function(){

    const sideMenu = {
        layer: $('.menu-layer'),
        background: $('.menu-background'),
        menu: $('.menu'),
        trigger: $('.menu-trigger'),

        state: 'closed',

        open(){
            this.animating();
            $(this.layer).addClass('opened');
            $(this.trigger).addClass('active');
            this.state = 'opened';
        },

        animating(){
            $(this.layer).addClass('animating');
            $(this.layer).on('transitionend', function(){
                $(this).removeClass('animating');
            });
        },

        close(){
            this.animating();
            $(this.layer).removeClass('opened');
            $(this.trigger).removeClass('active');
            this.state = 'closed';
        },

        init(){
            $(this.trigger).on('click', () => {
                if (this.state === 'closed'){
                    this.open();
                } else{
                    this.close();
                }
            });

            $(this.background).on('click', () => {
                this.close();
            });
        }
    }

    sideMenu.init();

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIiwibWFpbi5qcyIsIm1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBvd2wgPSAkKCcub3dsLWNhcm91c2VsLXNsaWRlcycpO1xyXG4gICAgb3dsLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOmZhbHNlLFxyXG4gICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICBkb3RzOmZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OmZhbHNlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6NDUwLFxyXG4gICAgICAgIG1vdXNlRHJhZzp0cnVlLFxyXG4gICAgICAgIHRvdWNoRHJhZzp0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTMwMDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgICAgICBzdGFnZVBhZGRpbmc6MzAwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvd2wub24oJ21vdXNld2hlZWwnLCAnLm93bC1zdGFnZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuZGVsdGFZPjApIHtcclxuICAgICAgICAgICAgb3dsLnRyaWdnZXIoJ3ByZXYub3dsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3dsLnRyaWdnZXIoJ25leHQub3dsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5vd2wtY2Fyb3VzZWwtcGhvbmUnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIG1hcmdpbjoxMCxcclxuICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICBhdXRvcGxheTp0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVPdXQ6J2ZhZGVPdXREb3duJyxcclxuICAgICAgIGFuaW1hdGVJbjonZmFkZUluRG93bicsXHJcbiAgICAgICAgc21hcnRTcGVlZDo0NTAsXHJcbiAgICAgICAgbW91c2VEcmFnOmZhbHNlLFxyXG4gICAgICAgIHRvdWNoRHJhZzpmYWxzZVxyXG4gICAgfSlcclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2luaXQnKTtcclxuXHJcbiAgICAkKCcuaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBjb25zdCBzaWRlTWVudSA9IHtcclxuICAgICAgICBsYXllcjogJCgnLm1lbnUtbGF5ZXInKSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkKCcubWVudS1iYWNrZ3JvdW5kJyksXHJcbiAgICAgICAgbWVudTogJCgnLm1lbnUnKSxcclxuICAgICAgICB0cmlnZ2VyOiAkKCcubWVudS10cmlnZ2VyJyksXHJcblxyXG4gICAgICAgIHN0YXRlOiAnY2xvc2VkJyxcclxuXHJcbiAgICAgICAgb3Blbigpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGluZygpO1xyXG4gICAgICAgICAgICAkKHRoaXMubGF5ZXIpLmFkZENsYXNzKCdvcGVuZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzLnRyaWdnZXIpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICdvcGVuZWQnO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFuaW1hdGluZygpe1xyXG4gICAgICAgICAgICAkKHRoaXMubGF5ZXIpLmFkZENsYXNzKCdhbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgJCh0aGlzLmxheWVyKS5vbigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xvc2UoKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpbmcoKTtcclxuICAgICAgICAgICAgJCh0aGlzLmxheWVyKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICQodGhpcy50cmlnZ2VyKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0KCl7XHJcbiAgICAgICAgICAgICQodGhpcy50cmlnZ2VyKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2Nsb3NlZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMuYmFja2dyb3VuZCkub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2lkZU1lbnUuaW5pdCgpO1xyXG5cclxufSk7Il19
