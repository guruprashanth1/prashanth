//service
var myapp=angular.module("testapp",[]);
myapp.service("random",function(){
    var num=Math.round(Math.random()*100);
    this.randomNumber=function(){
        return num;
    };
});
//control method
myapp.controller("serviceCtr",function($scope,random){
$scope.randomTest=function(){
    console.log("test");
    $scope.testrandom=random.randomNumber();
    $scope.testrandom1=random.randomNumber();
    $scope.testrandom2=random.randomNumber();

};
});