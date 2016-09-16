angular.module('starter.controllers', ['ngSanitize'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicHistory) {

		  // $ionicSlideBoxDelegate.update();

		  $ionicHistory.nextViewOptions({
			disableBack: true
		  });
		 
		  // Called to navigate to the main app
		  $scope.startApp = function() {
			$state.go('app.login');
		  };
		  $scope.next = function() {
			$ionicSlideBoxDelegate.next();
		  };
		  $scope.previous = function() {
			$ionicSlideBoxDelegate.previous();
		  };

		  // Called each time the slide changes
		  $scope.slideChanged = function(index) {
			$scope.slideIndex = index;
		  };

})

.filter('hrefToJS', function ($sce, $sanitize) {
    return function (text) {
        var regex = /href="([\S]+)"/g;
        var newString = $sanitize(text).replace(regex, "onClick=\"window.open('$1', '_system', 'location=yes')\"");
        return $sce.trustAsHtml(newString);
    }
})
	
.controller('SindiCtrl', function($rootScope,$scope) {
	
	var deviceInformation = ionic.Platform.device();

	var isIOS = ionic.Platform.isIOS();
	var isAndroid = ionic.Platform.isAndroid();
	var isWindowsPhone = ionic.Platform.isWindowsPhone();

	$rootScope.username 	= 'sp1ke77';

	$rootScope.titulo1		= 'Celebridades';
	$rootScope.slug1		= 'celebridades';

	
	$scope.htmlfacebook1 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" >Facebook</a>';
    $scope.htmltwitter1 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo1+'&amp;url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
    $scope.htmlgoogleplus1 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
    $scope.htmlwhatsapp1 	= '<a class="crunchify-link crunchify-whatsapp" href="whatsapp://send?text=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+' '+$rootScope.titulo1+'" target="_blank">WhatsApp</a>';
    
    if (isIOS) {
		$scope.htmlsms1 		= '<a class="crunchify-link crunchify-sms" href="sms:&body=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+' '+$rootScope.titulo1+'" target="_blank">SMS</a>';	
	} 
    
    if (isAndroid) { 
        $scope.htmlsms1 	= '<a class="crunchify-link crunchify-sms" href="sms:?body=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+' '+$rootScope.titulo1+'" target="_blank">SMS</a>';
	}
	
})
	
	
.controller('LoginCtrl', function($rootScope, $http) {

	$rootScope.saveUserinfo = function() {
 		localforage.setItem("username", $rootScope.username);
		localforage.setItem("username", $rootScope.token);
	};
	
	
	/*$scope.getData = function() {
        $http.get("http://lrwebtool.com/example.json", { params: { "key1": "value1", "key2": "value2" } })
            .success(function(data) {
                $scope.m4mpt = data.m4mpt;
                $scope.m4mes = data.m4mpt;
                $location.path("/account");
            })
            .error(function(data) {
                alert("ERROR");
            });
    }*/

});
