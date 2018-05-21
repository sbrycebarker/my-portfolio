  $('.projcon').css('display', 'none')
$(document).ready(function(){
  // $(window).reload()
  // Add scrollspy to <body>
  // function slick() {
  //   $('.multiple-items').slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     dots: true
  //   });
  // }
  // slick()


  $('.projcon').css('display', 'flex')
  $('body').scrollspy({target: ".navbar", offset: 200});



  $("#headerNav a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 800, function(){

        window.location.hash;
      });
    }
  });

});
