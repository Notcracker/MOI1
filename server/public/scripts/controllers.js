'use strict'

angular.module('malApp')


	.controller('searchController', ['$scope', 'searchFactory', function($scope, searchFactory) {
        $scope.query = {userName:''};

        $scope.sendQuery = function(){
        	console.log($scope.query);
        	searchFactory.query1().post($scope.query,function(data){
        		console.log(data.userName2);
        		window.location.replace('http://localhost:3000/aList'+data.userName2);
        	});
        }
        
          
    }]);