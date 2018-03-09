angular.module('myApp').controller('mainCtrl', function($scope){
  function slick() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });
  }
  slick()
})
