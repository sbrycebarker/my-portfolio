angular.module('myApp').controller('mainCtrl', function($scope){
  $scope.slick = function() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });
  }
  $scope.slick()
})
