'use strict'

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


angular.module('malApp3', ['ui.router','ngResource'],function($locationProvider){
	$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
})

	.controller('animelistController', ['$scope', 'animeFactory', '$location', function($scope, animeFactory, $location){
		var pId = $location.path().split("/")[2];//[3]||"Unknown";   
		console.log(pId);
    	//console.log(typeof pId);
	    $scope.dd = '';
		animeFactory.load(pId).get(function(data){
			$scope.dd = data.data1;
		})
	}]);
