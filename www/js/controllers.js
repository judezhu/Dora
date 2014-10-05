angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('accountCtrl', function($scope) {

})
.controller('searchCtrl', function($scope, $ionicLoading) {
	$scope.mapCreated = function(map) {
		$scope.map = map;
	};
		  
    $scope.centerOnMe = function () {
    	console.log("Centering");
    	if (!$scope.map) {
    		return;
	}

	$scope.loading = $ionicLoading.show({
		content: 'Getting current location...',
		showBackdrop: false
	});

	navigator.geolocation.getCurrentPosition(function (pos) {
		console.log('Got pos', pos);
		$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		$scope.loading.hide();
		},  function (error) {
			alert('Unable to get location: ' + error.message);
			});
	};
})
.controller('itemListCtrl', function($scope) {
});

