angular.module('starter.controllers', ['ngSanitize'])



.controller('AppCtrl', function($scope, $ionicModal, $state, $timeout, $rootScope) {

  $scope.GotoLink = function (url) {
    window.open(url,'_system');
  }
  
 $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
      $scope.loginModal = modal;
    },
    {
      scope: $scope,
      animation: 'slide-in-up',
      focusFirstInput: true
    }
  );
  //Be sure to cleanup the modal by removing it from the DOM
  $scope.$on('$destroy', function() {
    $scope.loginModal.remove();
  }); 




  
  
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicHistory, $ionicViewService) {

		  // $ionicSlideBoxDelegate.update();
		  
		  $ionicViewService.clearHistory();

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

.controller('SindiCtrl', function($rootScope,$scope) {
	
	var deviceInformation = ionic.Platform.device();

	var isIOS = ionic.Platform.isIOS();
	var isAndroid = ionic.Platform.isAndroid();
	var isWindowsPhone = ionic.Platform.isWindowsPhone();

	$rootScope.htmlurlrecrutamento 	= 'http://lrwebtool.com/recrutar';
	$rootScope.username 	= 'sp1ke77';

	$rootScope.titulo1		= 'Celebridades';
	$rootScope.slug1		= 'celebridades';
	$rootScope.url1			= encodeURIComponent('http://lrwebtool.com/celebridades/?id=sp1ke77');
	$rootScope.htmlfacebook1 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" >Facebook</a>';
    $rootScope.htmltwitter1 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo1+'&amp;url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
    $rootScope.htmlgoogleplus1 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
    $rootScope.htmllinkedin1 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo1+'" target="_blank">LinkedIn</a>';
	$rootScope.htmlwhatsapp1 	= 'whatsapp://send?text='+$rootScope.url1;
	//$rootScope.htmlwhatsapp1 	= '<a class="crunchify-link crunchify-whatsapp" href="whatsapp://send?text='+$rootScope.url1+'" data-action="share/whatsapp/share target="_blank">WhatsApp</a>';
	if (isIOS) { $rootScope.htmlsms1 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+' '+$rootScope.titulo1;} 
    if (isAndroid) { $rootScope.htmlsms1 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+' '+$rootScope.titulo1;}

	$rootScope.titulo2		= 'Cristina%20Ferreira';
	$rootScope.slug2		= 'celebridades-cf';
	$rootScope.htmlfacebook2 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'" >Facebook</a>';
    $rootScope.htmltwitter2 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo2+'&amp;url=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
    $rootScope.htmlgoogleplus2 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
    $rootScope.htmllinkedin2 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo2+'" target="_blank">LinkedIn</a>';
	
	if (isIOS) { $rootScope.htmlsms2 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+' '+$rootScope.titulo2;} 
    if (isAndroid) { $rootScope.htmlsms2 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+' '+$rootScope.titulo2;}
    
    $rootScope.titulo3		= 'Mickael%20Carreira';
	$rootScope.slug3		= 'celebridades-mc';
	$rootScope.htmlfacebook3 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'" >Facebook</a>';
    $rootScope.htmltwitter3 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo3+'&amp;url=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
    $rootScope.htmlgoogleplus3 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
    $rootScope.htmllinkedin3 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo3+'" target="_blank">LinkedIn</a>';
    
    if (isIOS) { $scope.htmlsms3 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+' '+$rootScope.titulo3;} 
    if (isAndroid) { $scope.htmlsms3 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+' '+$rootScope.titulo3;}
	
	$rootScope.titulo4		= 'Ricardo%20Carriço';
	$rootScope.slug4		= 'celebridades-rc';
	$scope.htmlfacebook4 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'" >Facebook</a>';
    $scope.htmltwitter4 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo4+'&amp;url=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
    $scope.htmlgoogleplus4 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
    $scope.htmllinkedin4 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo4+'" target="_blank">LinkedIn</a>';
    
    if (isIOS) { $scope.htmlsms4 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+' '+$rootScope.titulo4;} 
    if (isAndroid) { $scope.htmlsms4 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+' '+$rootScope.titulo4;}
	
	$rootScope.titulo5		= 'Monica%20Naranjo';
	$rootScope.slug5		= 'celebridades-mn';
    $scope.htmlfacebook5 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'" >Facebook</a>';
    $scope.htmltwitter5 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo5+'&amp;url=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
    $scope.htmlgoogleplus5 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
    $scope.htmllinkedin5 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo5+'" target="_blank">LinkedIn</a>';
    
    if (isIOS) { $scope.htmlsms5 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+' '+$rootScope.titulo5;} 
    if (isAndroid) { $scope.htmlsms5 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+' '+$rootScope.titulo5;}
    
    
    
        	
})
	
	
.controller('LoginCtrl', function($rootScope, $scope, $http, $state, AuthenticationService) {

$scope.message = "";
  
  $scope.user = {
    username: null,
    token: null
  };
 
  $scope.login = function() {
    AuthenticationService.login($scope.user);
  };
 
  $scope.$on('event:auth-loginRequired', function(e, rejection) {
    $scope.loginModal.show();
  });
 
  $scope.$on('event:auth-loginConfirmed', function() {
     $scope.username = null;
     $scope.token = null;
     $scope.loginModal.hide();
  });
  
  $scope.$on('event:auth-login-failed', function(e, status) {
    var error = "Login failed.";
    if (status == 401) {
      error = "Invalid Username or token.";
    }
    $scope.message = error;
  });
 
  $scope.$on('event:auth-logout-complete', function() {
    $state.go('app.home', {}, {reload: true, inherit: false});
  });	

})

.controller('LogoutCtrl', function($scope, AuthenticationService) {
    AuthenticationService.logout();
})

.controller('CustomerCtrl', function($scope, $state, $http) {
    $scope.customers = [];
    
    $http.get('https://customers')
        .success(function (data, status, headers, config) {
            $scope.customers = data;
        })
        .error(function (data, status, headers, config) {
            console.log("Error occurred.  Status:" + status);
        });
});
