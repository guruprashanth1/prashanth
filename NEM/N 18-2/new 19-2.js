var app=angular.module("testApp2",[]);
app.directive("cusstomDirective",function(){
  return{
    restrict:"E",
    template:"<h1> hello this is custom dijdf</h1>"
  }

});

// custom direc
app.directive("enter",function(){
    return{
      restrict:"A",

      link:function(scope,element,attrs){
          element.bind("mouseenter",function(){
              console.log("mouse entered");
              element.addClass("enter");

          });
      }
      
    }
  
  });
  
  app.directive("leave",function(){
    return{
      restrict:"A",
      link:function(scope,element,attrs){
          element.bind("mouseleave",function(){ //jquery
              console.log("mouse leaved");
              element.removeClass("enter");

          });
      }
      
    }
  
  });
  
