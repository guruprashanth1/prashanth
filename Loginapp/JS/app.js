var myapp=angular.module("loginapp",["ngRoute","firebase"]);

myapp.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
    $routeProvider.when("/login",{
        title:"login",
        templateUrl:"Views/login.html",
        controller:"registerCtr"
    }).when("/register",{
    title:"register",
    templateUrl:"Views/register.html",
    controller:"registerCtr"
    }).when("/success",{
        title:"success",
        templateUrl:"Views/success.html",
        controller:"successCtr"
    }).when("/homepage",{
        title:"login application",
        templateUrl:"Views/home.html",
        //controller:"homeCtr"
    }).otherwise({
        redirectTo:"/login"
    });
}]);