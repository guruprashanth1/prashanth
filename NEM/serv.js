var myapp=angular.module("app",["ngRoute"]);
myapp.controller("testctr",function($scope,$timeout,$interval){
$scope.message="hello chandru";
$timeout(function(){
    $scope.message="hello sisya";
    },1000);
});
$scope.time=new Date().toLocaleTimeString();
$interval(function(){
    $scope.time=new Date().toLocaleTimeString();

},1000)
