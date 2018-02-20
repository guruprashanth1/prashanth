var app=angular.module("task1",[]);

app.controller("myctr",function($scope ){
    $scope.emps=[
        {
        "name": "Chandru",
        "eid":"123",
        "designation":"develper",
        "age": "19",
        "gender": "male",
        "slalry":"20000"
        
        },
        {
            "name": "Guru",
            "eid":"124",
            "designation":"develper",
            "age": "23",
            "gender": "male",
            "slalry":"10000"
            
        },
        {
            "name": "Roopesh",
            "eid":"125",
            "designation":"manager",
            "age": "45",
            "gender": "male",
            "slalry":"20000"
            
        },
        {
            "name": "Appu",
            "eid":"126",
            "designation":"trainer",
            "age": "29",
            "gender": "female",
            "slalry":"20000"
            
        }
    ];


    });
