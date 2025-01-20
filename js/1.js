$(document).ready(function () {
    $('.main-slider__sliders').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.png" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true
    });
    if($(window).width()<991){
        $('.header__logo').slick({
            arrows:false,
            autoplay: true,
            autoplaySpeed: 3000,
            vertical:true
        });
    }

    $('.parallax').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = ($(window).scrollTop()/2); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            console.log(coords);
            $bgobj.css({ backgroundPosition: coords });
        });
      });


});




$bgobj.data('speed')
