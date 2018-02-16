$(document).ready(function(){
  // Add scrollspy to <body>
  $('.projcon').css('display', 'flex')
  $('body').scrollspy({target: ".navbar", offset: 200});

  // Add smooth scrolling on all links inside the navbar
  $("#headerNav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash;
      });
    }  // End if
  });
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
});
