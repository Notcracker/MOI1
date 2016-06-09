'use strict';

angular.module('confusionApp')

       .controller('animelistController', ['$scope', 'animeFactory', '$location', function($scope, animeFactory, $location){
        var pId = $location.path().split("/")[2];//[3]||"Unknown";   
        console.log(pId);
        //console.log(typeof pId);
        $scope.dd = '';
        animeFactory.load(pId).get(function(data){
            console.log(data.alist[0]);
            $scope.dd = data.alist[0].uName; 
        })

    
    }]);

;


angular.module('malApp', ['ui.router','ngResource'])


    .controller('searchController', ['$scope', 'searchFactory', function($scope, searchFactory) {
        $scope.query = {userName:''};

        $scope.sendQuery = function(){
            console.log($scope.query);
            searchFactory.query1().post($scope.query,function(data){
                console.log(data.userName2);
                window.location.replace('http://localhost:3000/aList' + '/' + data.userName2);
            });
        }
        
          
    }]);