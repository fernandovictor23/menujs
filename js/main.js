$(document).ready(function(){
    $('.menu li:has(ul)').click(function(e){
        e.preventDefault();
        if($(this).hasClass('ativado')){
            $(this).removeClass('ativado');
            $(this).children('ul').slideUp();
        } else {
            $('.menu li ul ').slideUp();
            $('.menu li').removeClass('ativado');
            $(this).addClass('ativado');
            $(this).children('ul').slideDown();
        }
    });
    $('.btn-menu').click(function(){
        $('.contenedor-menu .menu ').slideToggle();
    });

    $(window).resize(function(){
        if($(document).width() > 450){
            $('.contenedor-menu .menu').css({'display':'block'});
        }
        if($(document).width() < 450){
            $('.contenedor-menu .menu').css({'display':'none'});
            $('.menu li ul').slideUp();
            $('menu li').removeClass('ativado');
        };
    });
});