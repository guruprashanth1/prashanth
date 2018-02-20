//service
var myapp=angular.module("testapp1",[]);
myapp.factory("random",function(){
    var obj={}
    var num=Math.round(Math.random()*100);
    obj.randomNumber=function(){
        return num;
    };

return obj;
    
    
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