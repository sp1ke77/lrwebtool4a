angular.module('starter', ['ionic','starter.controllers','ngCordova'])

.run(function($ionicPlatform, $rootScope, $cordovaDevice) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    /*if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }*/

			if (window.cordova) {
				 var uuid = $cordovaDevice.getUUID();
				 var model = $cordovaDevice.getModel();
				 var platform = $cordovaDevice.getPlatform();
				 var platformVersion = $cordovaDevice.getVersion();
				 var language = '';

				 navigator.globalization.getLocaleName( function (locale) { var language = locale.value; });

				 var mobileDetails = {
					 'uuid': uuid,
					 'model': model,
					 'platform': platform,
					 'platformVersion': platformVersion,
					 'language': language,
				 };


				 $rootScope.uuid = uuid;
				 $rootScope.model = model;
				 $rootScope.platform = platform;
				 $rootScope.platformVersion = platformVersion;
				 $rootScope.language = language;

			 }
			console.log('Mobile Phone details RUN:', mobileDetails)
			console.log('LOCALE RUN:', $rootScope.language)

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


   /* .state('app.m4m', {
    url: "/m4m",
    views: {
      'menuContent': {
        templateUrl: "templates/m4m.html",
      }
    }
  })*/

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
