angular.module('App.userprofile-weatherforecastCtrl',['ngAnimate', 'ui.bootstrap'
  ])
.controller('userprofile-weatherforecastCtrl', function ($scope, $http, userProfileFactory){
	$scope.zipcode;
	$scope.weather = [];
	$scope.displayForecast = function(){
		userProfileFactory.weatherForecast($scope.zipcode)
		.then(function(results){
			var response = results.data.forecast.simpleforecast.forecastday;
			console.log("+++++ line 9: ", response)
			for(var i=0; i < 7; i++){
				var conditions = response[i].conditions.split(' ');
				for(var j=0; j < conditions.length; j++){
					if(conditions[j] === "Rain"){
						$scope.weather.push(response[i].date.weekday_short);
					}
				}
			}
			console.log($scope.weather)
		})
	}
  $scope.init = function(){

  }
  
  $scope.init()


})