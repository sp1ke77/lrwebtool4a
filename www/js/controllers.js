angular.module('starter.controllers', ['ngSanitize'])

.filter('hrefToJS', function ($sce, $sanitize) {
    return function (text) {
        var regex = /href="([\S]+)"/g;
        var newString = $sanitize(text).replace(regex, "onClick=\"window.open('$1', '_system', 'location=yes')\"");
        return $sce.trustAsHtml(newString);
    }
})

.controller('AppCtrl', function($scope, $rootScope) {

	// External Links Redir
	$scope.GotoLink = function (url) {
		window.open(url,'_system');
	}
	
	// Internal Redir : LOCKED
	$scope.lockedApp = function() {
		$state.go('app.locked');
	};

	// Load Registry
	$rootScope.username 	= localStorage.getItem("username");
	$rootScope.token 		= localStorage.getItem("token");
   
})


.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicHistory, $ionicSideMenuDelegate) {

	$ionicHistory.nextViewOptions({
		disableBack: true
	});

	// Called to navigate to the main app
	$scope.startApp = function() {
		$state.go('app.api');
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

	// Open side menu
	$scope.toggleLeftSideMenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};

})

.controller('SindiCtrl', function($rootScope,$scope) {
	
	var deviceInformation = ionic.Platform.device();

	var isIOS = ionic.Platform.isIOS();
	var isAndroid = ionic.Platform.isAndroid();
	var isWindowsPhone = ionic.Platform.isWindowsPhone();

	$rootScope.htmlurlrecrutamento 	= 'http://lrwebtool.com/recrutar';
	$rootScope.username 	= localStorage.getItem("username");

	// PC 1
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

	// PC 2
	$rootScope.titulo2		= 'Cristina%20Ferreira';
	$rootScope.slug2		= 'celebridades-cf';
	$rootScope.htmlfacebook2 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'" >Facebook</a>';
	$rootScope.htmltwitter2 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo2+'&amp;url=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
	$rootScope.htmlgoogleplus2 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
	$rootScope.htmllinkedin2 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo2+'" target="_blank">LinkedIn</a>';
	
	if (isIOS) { $rootScope.htmlsms2 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+' '+$rootScope.titulo2;} 
	if (isAndroid) { $rootScope.htmlsms2 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug2+'/?id='+$rootScope.username+' '+$rootScope.titulo2;}
	
	// PC 3
	$rootScope.titulo3		= 'Mickael%20Carreira';
	$rootScope.slug3		= 'celebridades-mc';
	$rootScope.htmlfacebook3 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'" >Facebook</a>';
	$rootScope.htmltwitter3 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo3+'&amp;url=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
	$rootScope.htmlgoogleplus3 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
	$rootScope.htmllinkedin3 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo3+'" target="_blank">LinkedIn</a>';
	
	if (isIOS) { $scope.htmlsms3 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+' '+$rootScope.titulo3;} 
	if (isAndroid) { $scope.htmlsms3 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug3+'/?id='+$rootScope.username+' '+$rootScope.titulo3;}
	
	// PC 4
	$rootScope.titulo4		= 'Ricardo%20Carriço';
	$rootScope.slug4		= 'celebridades-rc';
	$scope.htmlfacebook4 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'" >Facebook</a>';
	$scope.htmltwitter4 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo4+'&amp;url=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
	$scope.htmlgoogleplus4 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
	$scope.htmllinkedin4 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo4+'" target="_blank">LinkedIn</a>';
	
	if (isIOS) { $scope.htmlsms4 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+' '+$rootScope.titulo4;} 
	if (isAndroid) { $scope.htmlsms4 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug4+'/?id='+$rootScope.username+' '+$rootScope.titulo4;}
	
	// PC 5
	$rootScope.titulo5		= 'Monica%20Naranjo';
	$rootScope.slug5		= 'celebridades-mn';
	$scope.htmlfacebook5 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'" >Facebook</a>';
	$scope.htmltwitter5 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo5+'&amp;url=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
	$scope.htmlgoogleplus5 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
	$scope.htmllinkedin5 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo5+'" target="_blank">LinkedIn</a>';
	
	if (isIOS) { $scope.htmlsms5 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+' '+$rootScope.titulo5;} 
	if (isAndroid) { $scope.htmlsms5 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug5+'/?id='+$rootScope.username+' '+$rootScope.titulo5;}
      	
})
	
	
.controller('RegisterCtrl', function($rootScope, $scope, $http) {
	
	$scope.registerdevice = function() {
		if(typeof(Storage) != "undefined") {
			localStorage.setItem("username", $scope.username);
			localStorage.setItem("token", $scope.token);

				$http.get("http://lrwebtool.com/wp-json/wp/v2/pages/14488", { params: { "lg": $scope.username,  "token": $scope.token } })
				.success(function(data) {
					$scope.profile = data;
					window.localStorage.setItem("profile", JSON.stringify(data));
				})
				.error(function(data) {
					if(window.localStorage.getItem("profile") !== undefined) {
						$scope.profile = JSON.parse(window.localStorage.getItem("profile"));
					}
				});	
        
			if(alert("Dispositivo Registado com os dados : " + localStorage.getItem("username") + " / " + localStorage.getItem("token"))){} 
			else window.location.reload();
		} else {
			if(alert("Desculpe, este dispositivo é imcompativel com a aplicação")){} 
			else window.location.reload();
		}
	};

})


.controller('UnregisterCtrl', function($rootScope, $scope) {
	
	$scope.unregisterdevice = function() {
		if(window.localStorage.getItem("username") == undefined && window.localStorage.getItem("token") == undefined) {
			if(alert("Desculpe, Não tem dispositivos registados")){} 
			else window.location.reload();
		}
		else if(window.localStorage.getItem("username") !== undefined && window.localStorage.getItem("token") !== undefined) {
			window.localStorage.removeItem("username");
			window.localStorage.removeItem("token");
			if(alert("Dispositivo removido")){} 
			else window.location.reload();
		}

	};
});
