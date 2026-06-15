function resetForm() {
  $("#contact-form").trigger("reset");
}

function resetMessages() {
  $("#contact-success").removeClass("success");
  $("#contact-failure").removeClass("error");
}

function updateNavbar() {
  var navbar_section = $(".navigation");
  var navbar_brand = $(".navbar > .navbar-brand");
  if ($(window).scrollTop() < 100) {
    navbar_section.addClass("scroll-top");
    navbar_brand.css("opacity", "0");
  } else {
    navbar_section.removeClass("scroll-top");
    navbar_brand.css("opacity", "1");
  }
}

$(document).ready(function () {
  // For the home page (or any page that has the hero area an image)
  // we change the navbar style so it blends into the background
  if ($(".hero-area").length > 0) {
    // Change menu styling if not on top, on load and then on scroll
    updateNavbar();
    $(window).scroll(function() {
      updateNavbar();
    });
  }

  // Contact form handling
  $("#contact-form").on("submit", function( event) {
    event.preventDefault();

    $.post(this.action, $(this).serialize(), function(formData) {
      resetForm();
      resetMessages();
      $("#contact-success").addClass("success");
    }, "json")
    .fail(function(errorData) {
      resetMessages();
      $("#contact-failure").addClass("error");
    })
  });
});
