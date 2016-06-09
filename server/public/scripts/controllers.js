'use strict';

angular.module('confusionApp')

       .controller('animelistController', ['$scope', 'animeFactory', '$location', function($scope, animeFactory, $location){
        var  nick = $location.absUrl().split('?')[0].split('/')[4].slice(0,-1)//[3]||"Unknown";   
        console.log(nick);
        //console.log(typeof pId);
        $scope.dd = '';
        animeFactory.load(nick).get(function(data){
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