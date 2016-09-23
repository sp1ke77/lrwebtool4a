angular.module('starter.controllers', ['ngSanitize'])

.controller('AppCtrl', function($scope, $rootScope, $state) {

	// External Links Redir
	$scope.GotoLink = function (url) {
		window.open(url,'_system');
	}
	
	// Internal Redir : SUPORTE
	$scope.GoToSuporte = function() {
		$state.go('app.suporte');
	}
	
	// Load Registry
	$rootScope.username 	= localStorage.getItem("username");
	$rootScope.token 		= localStorage.getItem("token");
	$rootScope.account 		= localStorage.getItem("account");
	
   
})

.controller('IntroCtrl', function($scope,$rootScope, $state, $ionicSlideBoxDelegate, $ionicSideMenuDelegate) {

				$scope.profile = localStorage.getItem('profile');
				
				if($scope.profile != undefined && $scope.profile != null){
					$scope.profilesplit 		= $scope.profile.split(',');
					$rootScope.profileusername 	= $scope.profilesplit[0];
					$rootScope.profiletoken 	= $scope.profilesplit[1];
					$rootScope.profilelistapt 	= $scope.profilesplit[2];
					$rootScope.profilelistaes 	= $scope.profilesplit[3];
					$rootScope.profilename 		= $scope.profilesplit[4];
				}
				
				console.log('INTROCTRL: ' + $rootScope.profilename);

	

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

.controller('ContactCtrl', function($scope, $rootScope, $ionicSlideBoxDelegate, $sce) {

	
	//local storage data
	$scope.profile = localStorage.getItem('profile');
	
	if($scope.profile != undefined && $scope.profile != null){
		$scope.profilesplit 		= $scope.profile.split(',');
		$rootScope.profilelistapt 	= $scope.profilesplit[2];
		$rootScope.profilelistaes 	= $scope.profilesplit[3];
	}
	
	console.log('CONTACTCTRL 1: ' + $rootScope.profilelistapt);
	console.log('CONTACTCTRL 2: ' + $rootScope.profilelistaes);

	$scope.fpt1	= 'https://mail4mkt.com/index.php/lists/' + $rootScope.profilelistapt + '/subscribe';
	$scope.fes1	= 'https://mail4mkt.com/index.php/lists/' + $rootScope.profilelistaes + '/subscribe';
	
	$rootScope.formPT = $sce.trustAsResourceUrl($scope.fpt1);
	$rootScope.formES = $sce.trustAsResourceUrl($scope.fes1);
	
	console.log('CONTACTCTRL 3: ' + $rootScope.formPT);
	
	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};

	// Open side menu
	$scope.toggleLeftSideMenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
	
})

.controller('SuporteCtrl', function($scope, $http) {

	$scope.profile = localStorage.getItem('profile');
	
	if($scope.profile != undefined && $scope.profile != null){
		$scope.suporte = {};
		$scope.profilesplit = $scope.profile.split(',');
		$scope.suporte.name 		= $scope.profilesplit[4];
		$scope.suporte.idlr 		= $scope.profilesplit[5];
		$scope.suporte.email 		= $scope.profilesplit[6];
	}
	
	$scope.departamentos = [ 
			{ nome:'Webtool', value:'webtool' },
			{ nome:'Financeiro', value:'financeiro' },
			{ nome:'Email Marketing', value:'emailmarketing' } 
		];
	
	
	
	$scope.submit = function() {
		$server_url = 'http://lrwebtool.com/wp-content/plugins/L4M-Webtool/api/l4m-process-support-form.php';
		result = $http.get($server_url + '?name=' +$scope.suporte.name + '&idlr=' +$scope.suporte.idlr + '&email=' +$scope.suporte.email + '&departamento=' +$scope.suporte.departamento + '&questao=' +$scope.suporte.questao)
	.then(function (result) {
		var json = JSON.parse(result);
		alert(json.data);
		//alert(json);
		
		}, function (result) {
			var json = JSON.parse(result);
			alert(json.data);
			
		})
	}
	
	console.log('SUPORTECTRL 1: ' + $scope.suporte.name);
	console.log('SUPORTECTRL 2: ' + $scope.suporte.idlr);
	console.log('SUPORTECTRL 3: ' + $scope.suporte.email);
	console.log('SUPORTECTRL 4: ' + $scope.suporte.departamento);
	console.log('SUPORTECTRL 5: ' + $scope.suporte.questao);

    

})

.controller('SindiCtrl', function($rootScope, $scope, $filter) {
	
	var deviceInformation = ionic.Platform.device();

	var isIOS = ionic.Platform.isIOS();
	var isAndroid = ionic.Platform.isAndroid();
	var isWindowsPhone = ionic.Platform.isWindowsPhone();

	$rootScope.htmlurlrecrutamento 	= 'http://lrwebtool.com/recrutar';
	$rootScope.username 	= localStorage.getItem("username");

	// PC 1
	$rootScope.titulo1		= 'Celebridades';
	$rootScope.slug1		= 'celebridades';
	//$rootScope.url1			= encodeURIComponent('http://lrwebtool.com/celebridades/?id=sp1ke77');
	$rootScope.htmlfacebook1 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" >Facebook</a>';
	$rootScope.htmltwitter1 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo1+'&amp;url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
	$rootScope.htmlgoogleplus1 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
	$rootScope.htmllinkedin1 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug1+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo1+'" target="_blank">LinkedIn</a>';
	//$rootScope.htmlwhatsapp1 	= 'whatsapp://send?text='+$rootScope.url1;
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
	
	// PC 6
	$rootScope.titulo6		= 'Cristina%20Ferreira%20-%20Para%20Homem';
	$rootScope.slug6		= 'celebridades-cfh';
	$scope.htmlfacebook6 	= '<a class="crunchify-link crunchify-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://lrwebtool.com/'+$rootScope.slug6+'/?id='+$rootScope.username+'" >Facebook</a>';
	$scope.htmltwitter6 	= '<a class="crunchify-link crunchify-twitter" href="https://twitter.com/intent/tweet?text='+$rootScope.titulo6+'&amp;url=http://lrwebtool.com/'+$rootScope.slug6+'/?id='+$rootScope.username+'" target="_blank">Twitter</a>';
	$scope.htmlgoogleplus6 	= '<a class="crunchify-link crunchify-googleplus" href="https://plus.google.com/share?url=http://lrwebtool.com/'+$rootScope.slug6+'/?id='+$rootScope.username+'" target="_blank">Google+</a>';
	$scope.htmllinkedin6 	= '<a class="crunchify-link crunchify-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://lrwebtool.com/'+$rootScope.slug6+'/?id='+$rootScope.username+'&amp;title='+$rootScope.titulo6+'" target="_blank">LinkedIn</a>';
	
	if (isIOS) { $scope.htmlsms6 	= 'sms:&body=http://lrwebtool.com/'+$rootScope.slug6+'/?id='+$rootScope.username+' '+$rootScope.titulo6;} 
	if (isAndroid) { $scope.htmlsms6 	= 'sms:?body=http://lrwebtool.com/'+$rootScope.slug6+'/?id='+$rootScope.username+' '+$rootScope.titulo6;}
      	
})
	
.controller('RegisterCtrl', function($rootScope, $scope, $http, $state, $filter, $ionicSideMenuDelegate) {
	
	$scope.registerdevice = function() {

			localStorage.setItem("username", $scope.username);
			localStorage.setItem("token", $scope.token);
			$scope.verifycode = "afhrfae74tr8348we4ftn23f8";
			localStorage.removeItem('account');
			console.log('REGISTERCTRL 1: ' + $scope.username);
			console.log('REGISTERCTRL 2: ' + $scope.token);
			console.log('REGISTERCTRL 3: ' + $scope.verifycode);

			$scope.result = "";
							
			if ($scope.username == undefined){ if(alert("Dados Invalidos")){} else window.location.reload();} 
			if ($scope.username == null ){ if(alert("Dados Invalidos")){} else window.location.reload();} 
			else if ($scope.token == undefined ){ if(alert("Dados Invalidos")){} else window.location.reload();}
			else if ($scope.token == null ){ if(alert("Dados Invalidos")){} else window.location.reload();}
			else if ($scope.verifycode == null ){ if(alert("Dados Invalidos")){} else window.location.reload();}
			else if ($scope.verifycode == undefined ){ if(alert("Dados Invalidos")){} else window.location.reload();}
			else 

				$http.get('http://lrwebtool.com/wp-json/wp/v2/pages/14488?U='+$scope.username+'&T='+$scope.token+'&V='+$scope.verifycode)
					.success(function(data, status, headers,config){
						console.log('REGISTERCTRL 1a: ' + $scope.username);
						console.log('REGISTERCTRL 2b: ' + $scope.token);
						console.log('REGISTERCTRL 3c: ' + $scope.verifycode);
						console.log('REGISTERCTRL 4: data success');
						$scope.result = data.content.rendered; // for UI
						console.log('REGISTERCTRL 5: ' + $scope.result);
						
						if($scope.result == undefined){
							window.localStorage.removeItem("username");
							window.localStorage.removeItem("token");
							localStorage.removeItem("profile");
							if(alert('Dados Invalidos')){} 
							else window.location.reload();
						} 
						if($scope.result == null){
							window.localStorage.removeItem("username");
							window.localStorage.removeItem("token");
							localStorage.removeItem("profile");
							if(alert("Dados Invalidos")){} 
							else window.location.reload();
						} 
						if($scope.result == 'ERRO\n'){
							window.localStorage.removeItem("username");
							window.localStorage.removeItem("token");
							localStorage.removeItem("profile");
							if(alert("Dados Invalidos")){} 
							else window.location.reload();
						} 
						
						
						
						if(($scope.result != undefined) && ($scope.result != null) && ($scope.result != 'ERRO\n')){
							
						localStorage.setItem('account', 'OK');
						$scope.saveresult = localStorage.setItem('profile', data.content.rendered);
						$scope.profile = localStorage.getItem('profile');
						
							$scope.profilesplit 		= $scope.profile.split(',');
							$rootScope.profileusername 	= $scope.profilesplit[0];
							$rootScope.profiletoken 	= $scope.profilesplit[1];
							$rootScope.profilelistapt 	= $scope.profilesplit[2];
							$rootScope.profilelistaes 	= $scope.profilesplit[3];
							$rootScope.profilename 		= $scope.profilesplit[4];
							
						console.log('REGISTERCTRL 6: ' + $rootScope.profilename);

							if(alert("Dispositivo Registado com os dados : " + localStorage.getItem("username") + " / " + localStorage.getItem("token"))){ } 
							else window.location.reload();
						}
						
					});

			

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
			localStorage.removeItem("profile");
			localStorage.removeItem('account');
			if(alert("Dispositivo removido")){} 
			else window.location.reload();
		}

	};
})

.controller('AdminCtrl', function($rootScope, $scope, $http, $filter) {
	
	
	
})
 
.filter('hrefToJS', function ($sce, $sanitize) {
    return function (text) {
        var regex = /href="([\S]+)"/g;
        var newString = $sanitize(text).replace(regex, "onClick=\"window.open('$1', '_system', 'location=yes')\"");
        return $sce.trustAsHtml(newString);
    }
});
