

$(document).ready(function(){
    
    var $P_menu = $('.phone_menu');
    var $D_menu = $('.desktop_menu');
    var $P_button = $('.menu_btn_p');
    var $D_button = $('.menu_btn_d');
    var $body = $('body');

    var $win_h = $(window).height();
    var $win_w = $(window).width();    

        $P_button.on('click', function(){
            $P_menu.toggleClass('phone_show');
            $('.phone_menu').css('height',$win_h);
            if($P_menu.hasClass('phone_show')){
                $P_button.addClass('btn_active');
                // $('.phone_menu').css('height',$win_h);
                $body.css('overflow','hidden');
            }else{
                $P_button.removeClass('btn_active');
                // $('.phone_menu').css('height','none');
                $body.css('overflow-x','scroll');
            };
        });

        $D_button.on('click', function(){
            $D_menu.toggleClass('desktop_show');
            if($D_menu.hasClass('desktop_show')){
                $D_button.addClass('btn_active');
            }else{
                $B_button.removeClass('btn_active');
            };
        });

});












