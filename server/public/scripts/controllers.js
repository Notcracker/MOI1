'use strict';

angular.module('confusionApp')

       .controller('animelistController', ['$scope', 'animeFactory', '$location', function($scope, animeFactory, $location){
        var  nick = $location.absUrl().split('?')[0].split('/')[4].slice(0,-1)//[3]||"Unknown";   
        console.log(nick);
        //console.log(typeof pId);
        $scope.dd = '';
        var hostname = window.location.hostname;
        animeFactory.load(nick,hostname).get(function(data){
            console.log(data.alist[0]);
            $scope.dd = data.alist[0]; 
        });

        $scope.animeOrder = 'seriesTitle';
        $scope.filterBy = function(filter){
            $scope.animeOrder = filter;
        };
        $scope.tab = 1;
        $scope.filtText = '';

        $scope.select = function(setTab) {
            $scope.tab = setTab;
            
            if (setTab === 6) {
                $scope.filtText = "ptw";
            }
            else if (setTab === 5) {
                $scope.filtText = "dropped";
            } 
            else if (setTab === 2) {
                $scope.filtText = "watching";
            }
            else if (setTab === 3) {
                $scope.filtText = "completed";
            }
            else if (setTab === 4) {
                $scope.filtText = "onhold";
            }
            else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };
    }]);

;


angular.module('malApp', ['ui.router','ngResource'])


    .controller('searchController', ['$scope', 'searchFactory', function($scope, searchFactory) {
        $scope.query = {userName:''};

        $scope.sendQuery = function(){
            console.log($scope.query);
            var host = window.location.hostname;
            searchFactory.query1(host).post($scope.query,function(data){
                console.log(data.userName2);
                window.location.replace('http://'+ host +':3000/aList' + '/' + data.userName2);
            });
        }
        
          
    }]);