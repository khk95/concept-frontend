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