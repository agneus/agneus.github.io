(function ($) {
  "use strict";

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
        /* ----------------------------------------------------------- */

    $(".revealator-delay1").addClass("no-transform");

    /* ----------------------------------------------------------- */
    /*  BUTTONS ANIMATION
        /* ----------------------------------------------------------- */
    function checkSize() {
      if ($(document).width() > 992) {
        var btn_hover = "";
        $(".btn").each(function () {
          var btn_text = $(this).text();
          $(this)
            .addClass(btn_hover)
            .empty()
            .append(
              "<span data-hover='" + btn_text + "'>" + btn_text + "</span>"
            );
        });
      }
    }
    checkSize();
    window.addEventListener("resize", function () {
      checkSize();
    });
  });
})(jQuery);

/* ----------------------------------------------------------- */
/*  TYPING ANIMATION
        /* ----------------------------------------------------------- */

$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: [ "Philosopher", "Sage", "Duelist", "Master", "Traveler" , ,"Weeb"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true,
  });
});
