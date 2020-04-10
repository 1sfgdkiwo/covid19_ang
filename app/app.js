var app = angular.module('myApp', []); //'ngRoute', 'ngAnimate'



app.controller('MukaCtrl', function ($scope,  $http) {
$scope.propinsi;
$scope.mypropinsi;
$scope.nasional;

 	$scope.getPropinsi = function() {
          $http({
              method: 'GET',
              url: 'https://api.kawalcorona.com/indonesia/provinsi/'
             // url: 'http://retail.satufokus.com/php/get_stok.php'   // ini proven
          }).then(function (response) {
              // success
            
              $scope.mypropinsi =response.data;

              //$scope.myNewpropinsi = JSON.parse(angular.toJson($scope.mypropinsi));
              

              //$scope.mypropinsi =angular.toJson(response.data);
              //$scope.mypropinsi = JSON.stringify($scope.propinsi);
              // $scope.mypropinsi =JSON.parse(angular.toJson(response.data));
             // $scope.pagenumber =Math.ceil($scope.stoks.length / $scope.pagesize);//jumlah total halaman
            console.log($scope.mypropinsi);
          }, function (response) {
              // error
              console.log(response.data,response.status);
          });
    };
 $scope.getPropinsi();


  $scope.getNasional = function() {
          $http({
              method: 'GET',
              url: 'https://api.kawalcorona.com/indonesia/'
             // url: 'http://retail.satufokus.com/php/get_stok.php'   // ini proven
          }).then(function (response) {
              // success
            
              $scope.nasional=response.data;

              //$scope.myNewpropinsi = JSON.parse(angular.toJson($scope.mypropinsi));
              

              //$scope.mypropinsi =angular.toJson(response.data);
              //$scope.mypropinsi = JSON.stringify($scope.propinsi);
              // $scope.mypropinsi =JSON.parse(angular.toJson(response.data));
             // $scope.pagenumber =Math.ceil($scope.stoks.length / $scope.pagesize);//jumlah total halaman
            console.log($scope.nasional);
          }, function (response) {
              // error
              console.log(response.data,response.status);
          });
    };
 $scope.getNasional();
 


 

});