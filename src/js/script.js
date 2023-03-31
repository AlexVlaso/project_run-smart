$(document).ready(function () {
  $(".carousel__inner").slick({
    prevArrow: `<button type="button" class="slick-prev"><img src="icons/left-arrow.png"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="icons/right-arrow.png"></button>`,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content ")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__details")
          .eq(i)
          .toggleClass("catalog-item__details_active");
      });
    });
  }
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay , #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut();
  });
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__desc").text($(".catalog-item__title").eq(i).text());
      $(".overlay , #order").fadeIn("slow");
    });
  });
});
