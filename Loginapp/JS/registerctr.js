myapp.controller("registerCtr",function($scope ,$firebaseAuth ,$location){
    $scope.message="hello app";
//register
    $scope.register=function(){
     //   $scope.message="wecome"+$scope.user.firstname;
        var username=$scope.user.email;
        var password=$scope.user.password;
        var auth=$firebaseAuth();

        if(username && password){
            auth.$createUserWithEmailAndPassword(username,password).then(function(){
                console.log("successfully created");
                // $scope.message="hi"+$scope.user.firstname+",thanks for registering";
                 $location.path("/login");
            }).catch(function(err){
                console.log(err);
                $scope.errMsg=true;
                $scope.errorMessage=err.message;
            });
        };
        
        
    };
//register end


$scope.login=function(){
      $scope.message="wecome"+$scope.user.firstname;
       var username=$scope.user.email;
       var password=$scope.user.password;
       var auth=$firebaseAuth();

    
           auth.$signInWithEmailAndPassword(username,password).then(function(){
               console.log("successfully loged in");
               // $scope.message="hi"+$scope.user.firstname+",thanks for registering";
                $location.path("/success");
           }).catch(function(err){
               console.log(err);
               $scope.errMsg=true;
               $scope.errorMessage=err.message;
           });
       };
    });  
       
   //loginend
