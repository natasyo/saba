$(document).ready(function () {
  $(".main-slider__sliders").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
    ],
  });

  if ($(window).width() > 992) {
    $(".header__logo").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      vertical: true,
    });
  }

  // Слайдер  наша команда
  $(".team__peoples").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/red-left.png" alt=""><span class="team__people-other team__people-prev"></span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span class="team__people-other team__people-next"></span><img src="images/red-right.png" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });

  $(".team__people-next").text($(".team__peoples .slick-current").data("next"));
  $(".team__people-prev").text($(".team__peoples .slick-current").data("prev"));

  $(".team__peoples").on("afterChange", function (event, slick, currentSlide) {
    $(".team__people-next").text(
      $(".team__peoples .slick-current").data("next")
    );
    $(".team__people-prev").text(
      $(".team__peoples .slick-current").data("prev")
    );
  });

  // Слайдер  наши партнеры
  $(".parnter__partners").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/red-left.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/red-right.png" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  var $page = $("html, body");
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      400
    );
    return false;
  });
  if ($(window).width() > 992) {
    // Паралакс фона
    // var background_image_parallax = function($object, multiplier) {
    //     multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    //     multiplier = 1 - multiplier;
    //     var $doc = $(document);
    //     $object.css({ "background-attatchment": "fixed" });
    //     $(window).scroll(function() {
    //
    //         if ($(window).scrollTop() < $object.offset().top + $(window).height() &&
    //             $(window).scrollTop() > $object.offset().top - $(window).height()) {
    //             var from_top = $doc.scrollTop() - $object.offset().top,
    //                 bg_css = '0px ' + (multiplier * from_top) + 'px';
    //             $object.css({ "background-position": bg_css });
    //         }
    //
    //     });
    // };
    // $('.parallax').each(function(indexInArray, valueOfElemen) {
    //
    //     background_image_parallax($(this, 0.25));
    // });

    var interval = [];
    var flag = [];
    var step = [];
    var current = [];
    $.each(
      $(".about-us-section3__counter-number"),
      function (indexInArray, valueOfElement) {
        flag[indexInArray] = true;
        var object = $(this);
        current[indexInArray] = +$(object).data("start");
        step[indexInArray] = +$(object).data("step");
        if (flag[indexInArray]) {
          $(window).scroll(function () {
            if (
              $(object).offset().top <
                $(window).scrollTop() + $(window).height() &&
              $(object).data("value") >= $(object).text() &&
              $(window).width() > 991
            ) {
              flag[indexInArray] = false;
              var count = String($(object).data("value"));
              interval[indexInArray] = setInterval(() => {
                current[indexInArray] =
                  current[indexInArray] + step[indexInArray] > count
                    ? count
                    : current[indexInArray] + step[indexInArray];
                var currentStr = String(current[indexInArray]);
                currentStr = currentStr
                  .replace(
                    new RegExp(
                      "^(\\d{" +
                        (currentStr.length % 3 ? currentStr.length % 3 : 0) +
                        "})(\\d{3})",
                      "g"
                    ),
                    "$1 $2"
                  )
                  .replace(/(\d{3})+?/gi, "$1 ")
                  .trim();

                $(object).text(currentStr);
                if (current[indexInArray] >= count) {
                  clearInterval(interval[indexInArray]);
                  return false;
                }
                current[indexInArray] += step[indexInArray];
              }, 350);
            }
          });
        }
      }
    );
  }

  if ($(window).width() <= 992) {
    $(".projects__wrap").slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 860,
          settings: {
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".projects__project-overlay-open").click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      if (
        $(this)
          .parents(".projects__project-overlay")
          .hasClass("projects__project-overlay_show")
      ) {
        $(".projects__project-overlay").removeClass(
          "projects__project-overlay_show"
        );
      } else {
        $(".projects__project-overlay").removeClass(
          "projects__project-overlay_show"
        );
        $(this)
          .parents(".projects__project-overlay")
          .addClass("projects__project-overlay_show");
      }
    });

    $(document).mouseup(function (e) {
      if (!$(".projects__project-overlay-open").is(e.target)) {
        $(".projects__project-overlay").removeClass(
          "projects__project-overlay_show"
        );
      }
    });

    $(".contats__departaments").slick({
      arrows: false,
      dots: true,
    });
  }

  // Гамбургер
  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.contains("is-active") === true
        ? this.classList.remove("is-active")
        : this.classList.add("is-active");
    });
  }

  $(".menu-icon").click(function (e) {
    e.preventDefault();
    $(".header__main-menu").toggleClass("header__main-menu_show");
  });
  // Закрывание меню
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".header__main-menu, .menu-icon"); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0 &&
      $(".header__main-menu")
    ) {
      // и не по его дочерним элементам
      $(".header__main-menu").removeClass("header__main-menu_show");
      $(".c-hamburger").removeClass("is-active");
    }
  });

  // Закрепление меню
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header").addClass("fixed");
    } else if ($(this).scrollTop() < 1) {
      $(".header").removeClass("fixed");
    }
    // if ($(window).width() > 992) {
    //     $('.about-us__in-project-count, .about-us__text1-icon, .border').each(function(index, el) {
    //         if ($(window).scrollTop() + ($(window).height() - 20) > $(this).offset().top) {
    //             $(this).addClass('about-number-svg');
    //         }
    //     });
    // }
    //
  });
  // about-us__in-project-count about-number-svg
  setMap();
});

// Карта
var myMap;

function setMap() {
  ymaps.ready(init);

  var myMap,
    fullScreen = false;
  var center = [43.24555747402797, 76.91851252371214];

  function init() {
    myMap = new ymaps.Map("map", {
      center: [+center[0], +center[1]],
      zoom: 14,
    });
    myMap.container.fitToViewport();

    // добавление меток
    $(".contats__departament").each(function (index, val) {
      /* iterate through array or object */

      var place = (
        $(window).width() > 992
          ? $(this).data("center")
          : $(this).data("center-mobile")
      ).split(",", 2);

      myPlacemark1 = new ymaps.Placemark(
        [+place[0], +place[1]],
        {
          hintContent: "Корпорация SABA",
        },
        {
          iconImageHref: "../images/pin.png",
        }
      );
      myMap.geoObjects.add(myPlacemark1);
    });
  }

  if ($(window).width() >= 992) {
    $(".contats__departament ").click(function (event) {
      /* Act on the event */
      event.preventDefault();
      var center1 =
        $(window).width() > 992
          ? $(this).data("center")
          : $("this").data("center-mobile");
      center1 = center1.split(",", 2);

      myMap.setCenter([+center1[0], +center1[1]]);
      $(".contacts__info-address").html(
        $(this).children(".contats__departament-address").text()
      );
      myMap.setCenter(center1);
    });
  }
}
