var test=angular.module("testApp",[]);
test.filter("testFilter",function(){
    return function(input){
        return input.slice(0,1).toUpperCase();
    }

});
test.controller("myCtr",function($scope){
$scope.t1=[
         {
           fname:"abc",
           age:23


         },
         {
            fname:"dss",
            age:24

         }

]
})