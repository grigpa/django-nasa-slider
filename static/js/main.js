(function () {
function initFullscreenGallery() {
  var modalEl = document.getElementById('galleryModal');
  var carouselEl = document.getElementById('galleryCarousel');
  if (!modalEl || !carouselEl) return;

  var modal = new bootstrap.Modal(modalEl);
  var carousel = new bootstrap.Carousel(carouselEl, { interval: false, ride: false });

  document.addEventListener('click', function (e) {
    var img = e.target.closest('.js-open-gallery');
    if (!img) return;

    var idx = parseInt(img.getAttribute('data-index') || "0", 10);
    modal.show();

    setTimeout(function () {
      carousel.to(idx);
    }, 0);
  });

}
  function initGallery() {
    if (!window.jQuery) return;

    var $main = $('.js-gallery-main');
    var $thumbs = $('.js-gallery-thumbs');

    if (!$main.length || !$thumbs.length) return;

    // чтобы при hot reload/перерендере не задваивалось
    if ($main.hasClass('slick-initialized')) $main.slick('unslick');
    if ($thumbs.hasClass('slick-initialized')) $thumbs.slick('unslick');

    $main.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-gallery-thumbs',
      adaptiveHeight: true,
    });

    $thumbs.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.js-gallery-main',
      focusOnSelect: true,
      arrows: true,
      dots: false,
      centerMode: false,
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev gallery-arrow-btn" aria-label="Prev"></button>',
      nextArrow: '<button type="button" class="slick-next gallery-arrow-btn" aria-label="Next"></button>',
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 5 } },
        { breakpoint: 768, settings: { slidesToShow: 4 } },
        { breakpoint: 576, settings: { slidesToShow: 3 } },
      ]
    });
    initFullscreenGallery();
  }

  // DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGallery);
  } else {
    initGallery();
  }
})();