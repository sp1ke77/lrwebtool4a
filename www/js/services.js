angular.module('starter.services', ['ngSanitize'])

/**
 * A simple example service that returns some data.
 */
.factory('DataLoader', function( $http, $log ) {

  return {
    get: function(url) {
      // Simple index lookup
      return $http.get( url );
    }
  }

})


.factory('AuthenticationService', function($rootScope, $http, authService, $httpBackend) {
  var service = {
    login: function(user) {
      $http.post('https://login', { user: user }, { ignoreAuthModule: true })
      .success(function (data, status, headers, config) {
    	$http.defaults.headers.common.Authorization = data.authorizationToken;  // Step 1
        // Store the token in SharedPreferences for Android, and Keychain for iOS
        // localStorage is not very secure
        
    	// Need to inform the http-auth-interceptor that
        // the user has logged in successfully.  To do this, we pass in a function that
        // will configure the request headers with the authorization token so
        // previously failed requests(aka with status == 401) will be resent with the
        // authorization token placed in the header
        authService.loginConfirmed(data, function(config) {  // Step 2 & 3
          config.headers.Authorization = data.authorizationToken;
          return config;
        });
      })
      .error(function (data, status, headers, config) {
        $rootScope.$broadcast('event:auth-login-failed', status);
      });
    },
    logout: function(user) {
      $http.post('https://logout', {}, { ignoreAuthModule: true })
      .finally(function(data) {
        delete $http.defaults.headers.common.Authorization;
        $rootScope.$broadcast('event:auth-logout-complete');
      });			
    },	
    loginCancelled: function() {
      authService.loginCancelled();
    }
  };
  return service;
});
