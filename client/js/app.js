// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'ui.router',
    'app.controllers',
    'lbServices',
    'angularModalService'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
 
      .state('home', {
        url: '/home',
        views: {
            'header':{
                 templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            },
             'footer':{
                templateUrl: 'views/footer.html',
                controller: 'footerCtrl'
            }  
        }
      })
    
    
    
.state('donate', {
    url: '/donate',
          views:{
             'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/Donate.html',
                controller: 'donateCtrl'
            },
             'footer':{
                templateUrl: 'views/footer.html',
                controller: 'footerCtrl'
            } 
        },
  })
    
.state('about', {
    url: '/about',
          views:{
             'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/About.html',
                controller: 'aboutCtrl'
            },
             'footer':{
                templateUrl: 'views/footer.html',
                controller: 'footerCtrl'
            } 
        },
  })
    
.state('vacanciesPartnership', {
    url: '/vacanciesPartnership',
          views:{
             'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/vacanciesPartnership.html',
                controller: 'vacanciesPartnershipCtrl'
            },
             'footer':{
                templateUrl: 'views/footer.html',
                controller: 'footerCtrl'
            } 
        },
  })
      
      
      
.state('forbidden', {
        url: '/forbidden',
            views:{
                'content':{
                     templateUrl: 'views/forbidden.html'
                }
            }
      });
    
    
    
$urlRouterProvider.otherwise('home');
  }])
  .run(['$rootScope', '$state', 'LoopBackAuth','Customer',  function($rootScope, $state, LoopBackAuth,Customer) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      // redirect to login page if not logged in
      if (toState.authenticate && !LoopBackAuth.accessTokenId) {
        event.preventDefault(); //prevent current page from loading

        // Maintain returnTo state in $rootScope that is used
        // by authService.login to redirect to after successful login.
        // http://www.jonahnisenson.com/angular-js-ui-router-redirect-after-login-to-requested-url/
        $rootScope.returnTo = {
          state: toState,
          params: toParams
        };

        $state.go('forbidden');
      }
         });
        
        
        
        // Get data from localstorage after pagerefresh
    // and load user data into rootscope.
      
         
     
  }]);
