var app=angular.module("task1",[]);

app.controller("myctr",function($scope ){
    $scope.emps=[
        {
        "name": "Chandru",
        "eid":"123",
        "designation":"develper",
        "age": "19",
        "gender": "male",
        "slalry":"20000",
        "photo": "http://p.imgci.com/db/PICTURES/CMS/128400/128483.1.jpg"
        
        },
        {
            "name": "Guru",
            "eid":"124",
            "designation":"develper",
            "age": "23",
            "gender": "male",
            "slalry":"10000",
            "photo": "http://p.imgci.com/db/PICTURES/CMS/108400/108439.1.jpg"
            
        },
        {
            "name": "Roopesh",
            "eid":"125",
            "designation":"manager",
            "age": "45",
            "gender": "male",
            "slalry":"20000",
            "photo":"http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg"
            
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
