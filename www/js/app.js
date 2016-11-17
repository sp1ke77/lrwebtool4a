angular.module('starter', ['ionic','starter.controllers','ngCordova'])

.run(function($ionicPlatform, $rootScope, $cordovaGlobalization) {

$ionicPlatform.ready(function() {
			if (window.cordova) {
					navigator.globalization.getPreferredLanguage(
					  function (language) {
						  console.log('language: ' + language.value + '\n');
						  $rootScope.language = language.value;
						  },
					  function () {
						  console.log('Error getting language\n');
						  $rootScope.language = 'pt-PT';
						  }
					);
			 } else { $rootScope.language = 'pt-PT';}
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // sets up our default state, all views are loaded through here
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.intro', {
    url: "/intro",
    views: {
      'menuContent': {
        templateUrl: "templates/intro.html",
        controller: 'IntroCtrl'
      }
    }
  })

  .state('app.api', {
    url: "/api",
    views: {
      'menuContent': {
        templateUrl: "templates/api.html",
      }
    }
  })

    .state('app.sindicancia', {
    url: "/sindicancia",
    views: {
      'menuContent': {
        templateUrl: "templates/sindicancia.html",
        controller: 'SindiCtrl'
      }
    }
  })


    .state('app.contatos', {
    url: "/contatos",
    views: {
      'menuContent': {
        templateUrl: "templates/contatos.html",
        controller: 'ContactCtrl'
      }
    }
  })

  .state('app.suporte', {
    url: "/suporte",
    views: {
      'menuContent': {
        templateUrl: "templates/suporte.html",
        controller: 'SuporteCtrl'
      }
    }
  })

  .state('app.admin', {
    url: "/admin",
    views: {
      'menuContent': {
        templateUrl: "templates/admin.html",
        controller: 'AdminCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/intro');
});
