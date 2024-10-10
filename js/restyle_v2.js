$(document).ready(function () {
  $(".youtubepopup").click(function () {
    var $this = $(this);
    var $iframe = $('<iframe frameborder="0" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src", $this.data("link")).css({"width": 600, "height": 400});
    var $title = '';
    $("#video-view").html($title).append($iframe);
    $("#video-popup").show();

    const element = "#video-view iframe"
    const button=".youtubepopup"
    $(document).click(function(event) {
        if (!$(event.target).closest(`${element},${button}`).length) {
            $(button).removeClass('active')
            $("#video-popup").hide()
            $("#video-view").html('')
        }
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
            $(button).removeClass('active')
            $("#video-popup").hide()
            $("#video-view").html('')
        }
    });
});
$('#video-close').click(function () {
    $("#video-view").html('')
    $("#video-popup").hide()
})
    const swiper = new Swiper(".detailswiperpreview", {
        spaceBetween: 9,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        slidesPerView: "auto",
        mousewheel: true,
        direction: 'vertical',
        freeMode: true,
        watchSlidesProgress: true,

    });

    const swiper2 = new Swiper(".detailswiper", {
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".detailslider-pagination",
            clickable: true
        },

    });



  $(".productslider__slider_v2").each(function () {
    $(this).slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      /*   autoplay: true,
        autoplaySpeed: 3000, */
      nextArrow: $(this).closest(".productslider").find(".slider__arrow_right"),
      prevArrow: $(this).closest(".productslider").find(".slider__arrow_left"),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

      ],
    })
  })

  $(".imgsliderblock__slider").each(function () {
    $(this).slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      /*   autoplay: true,
        autoplaySpeed: 3000, */
      nextArrow: $(this).closest(".imgsliderblock").find(".slider__arrow_right"),
      prevArrow: $(this).closest(".imgsliderblock").find(".slider__arrow_left"),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          },
        },

      ],
    })
  });

  $(".homenews_v2").each(function () {
    $(this).slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      gap: 22,
      /*   autoplay: true,
        autoplaySpeed: 3000, */
      nextArrow: $(this).closest(".imgsliderblock").find(".slider__arrow_right"),
      prevArrow: $(this).closest(".imgsliderblock").find(".slider__arrow_left"),
      responsive: [
        {
          breakpoint: 999,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            fade: true,
            slidesToScroll: 1,
            dots: true
          },
        },

      ],
    })
  });

  var something = (function () {
    var executed = false
    return function () {
      if (!executed) {
        executed = true
        $(".stats__number span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now))
                },
              }
            )
        })
      }
    }
  })()

  $(window).scroll(function () {
    if ($(".stats").length) {
      var top_of_element = $(".stats").offset().top
      var bottom_of_element =
        $(".stats").offset().top + $(".stats").outerHeight()
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
      var top_of_screen = $(window).scrollTop()

      if (
        bottom_of_screen > top_of_element &&
        top_of_screen < bottom_of_element
      ) {
        something()
      }
    }
  })


})
