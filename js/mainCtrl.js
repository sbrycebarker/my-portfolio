angular.module('myApp').controller('mainCtrl', function($scope){
  $scope.slick = function() {
    $('.multiple-items').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });
  }
  $scope.slick()
})
