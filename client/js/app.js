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
                controller: 'step1SelectAThemeCtrl'
            }  
        }
       
      })
    
    
    
      .state('forbidden', {
        url: '/forbidden',
            views:{
                'content':{
                     templateUrl: 'views/forbidden.html'
                }
            }
      })
    
    
    
       .state('signupmessage', {
        url: '/signupmessage',
            views:{
                'content':{
                     templateUrl: 'views/signupmessage.html'
                }
            }
      })
    
      .state('login', {
        url: '/login',
        views: {
            'header':{
                  templateUrl: 'views/header.html',
              },
            'content':{
                templateUrl: 'views/login.html',
                controller: 'userCtrl'
            }
              }
       
      })
      .state('signup', {
        url: '/signup',
        views:{
            'header':{
                  templateUrl: 'views/header.html',
              },
            'content':{
                  templateUrl: 'views/signup.html',
                  controller: 'userCtrl'
            }
        }
      
      })
    
    
    
      .state('signupsuccess', {
        url: '/signupsuccess',
        views:{
            'header':{
                  templateUrl: 'views/header.html',
              },
            'content':{
                  templateUrl: 'views/sign-up-success.html',
                  controller: 'userCtrl'
            }
        }
      })
    
     
      .state('theme1', {
    url: '/theme1',
      views:{
            'content':{
             templateUrl: 'views/theme1.html',
            controller: 'themeCtrl'
            }
        },
  authenticate:true
  })
    
    .state('goals', {
    url: '/goals',
      views:{
          'header':{
                  templateUrl: 'views/header.html',
              },
            'content':{
             templateUrl: 'views/goals.html',
            controller: 'goalCtrl'
            }
        },
  authenticate:true
  })
    
    

    .state('checkout', {
    url: '/checkout',
          views:{
              
              'header':{
                  templateUrl: 'views/header.html'
              },
              
            'content':{
                 templateUrl: 'views/checkout.html'
            }
        },
        authenticate:true
   
  })
    
    
        .state('dashboard', {
    url: '/dashboard',
          views:{
            'header':{
                templateUrl: 'views/header.html'
            },
              
            'content':{
                templateUrl: 'views/dashboardPage.html',
                controller:'dashboardCtrl'
            }
        },
        authenticate:true
  })
    
    
    

    .state('step1SelectATheme', {
    url: '/theme',
          views:{
             'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/step1SelectATheme.html',
                controller: 'step1SelectAThemeCtrl'
            }
        },
        authenticate:true
  })

  .state('step2AddPersonalDetails', {
    url: '/personaldetails',
          views:{
            'content':{
                templateUrl: 'views/step2AddPersonalDetails.html',
                controller: 'step2AddPersonalDetailsCtrl'
            }
        },
        authenticate:true
    
  })
  
   .state('myaccount', {
    url: '/myaccount',
          views:{
              'header':{
                  templateUrl: 'views/header.html',
              },
            'content':{
                templateUrl: 'views/manageaccount.html',
                controller: 'step2AddPersonalDetailsCtrl'
            }
        },
         authenticate:true
  })

  .state('step3Summary', {
    url: '/summary', 
          views:{
               'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/step3Summary.html',
                controller: 'step3SummaryCtrl'
            }
        },
         authenticate:true
  })

 

  .state('step4AdditionalInformationAboutYourself', {
   url: '/additonalinfo',
          views:{
               'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/step4AdditionalInformationAboutYourself.html',
                controller: 'step4AdditionalInformationAboutYourselfCtrl'
            }
        },
         authenticate:true
  
  })

  .state('samplework1', {
    url: '/samplework1',
          views:{
               'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/samplework1.html',
                controller: 'step5AddSampleWorkSCtrl'
            }
        },
         authenticate:true
  
  })

      .state('samplework2', {
    url: '/samplework2',
          views:{
               'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/samplework2.html',
                controller: 'step5AddSampleWorkSCtrl'
            }
        },
         authenticate:true
  
  })
    
      .state('samplework3', {
    url: '/samplework3',
          views:{
               'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/samplework3.html',
                controller: 'step5AddSampleWorkSCtrl'
            }
        },
         authenticate:true
  
  })
    


    .state('sampleformComplete', {
    url: '/sampleformComplete',
          views:{
               'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/sampleWorkAdded.html',
                controller: 'step5AddSampleWorkSCtrl'
            }
        },
         authenticate:true
  
  })
    

  .state('step6AddAdditionalExperience', {
    url: '/additionalexperience',
          views:{
             'header':{
                templateUrl: 'views/header.html'
            },
            'content':{
                templateUrl: 'views/step6AddAdditionalExperience.html',
                controller: 'step6AddAdditionalExperienceCtrl'
            }
        },
         authenticate:true

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
