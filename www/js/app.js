// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
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

  .state('app.login', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'

      }
    }
  })
  
    .state('app.sindicancia', {
    url: "/sindicancia",
    views: {
      'menuContent': {
        templateUrl: "templates/sindicancia.html",
      }
    }
  })
  
    .state('app.recrutar', {
    url: "/recrutar",
    views: {
      'menuContent': {
        templateUrl: "templates/recrutar.html",
      }
    }
  })
  
    .state('app.m4m', {
    url: "/m4m",
    views: {
      'menuContent': {
        templateUrl: "templates/m4m.html",
      }
    }
  })
  
    .state('app.contatos', {
    url: "/contatos",
    views: {
      'menuContent': {
        templateUrl: "templates/contatos.html",
      }
    }
  })

  .state('app.suporte', {
    url: "/suporte",
    views: {
      'menuContent': {
        templateUrl: "templates/suporte.html"
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/intro');
});
