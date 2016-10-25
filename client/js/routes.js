angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('dashboard.step1SelectATheme', {
    url: '/theme',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step1SelectATheme.html',
        controller: 'step1SelectAThemeCtrl'
      }
    }
  })

  .state('dashboard.step2AddPersonalDetails', {
    url: '/personaldetails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step2AddPersonalDetails.html',
        controller: 'step2AddPersonalDetailsCtrl'
      }
    }
  })

  .state('dashboard.step3Summary', {
    url: '/summary',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step3Summary.html',
        controller: 'step3SummaryCtrl'
      }
    }
  })

  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller:'userCtrl',
    abstract:true
  })

  .state('dashboard.step4AdditionalInformationAboutYourself', {
    url: '/additonalinfo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step4AdditionalInformationAboutYourself.html',
        controller: 'step4AdditionalInformationAboutYourselfCtrl'
      }
    }
  })

  .state('dashboard.step5AddSampleWorkS', {
    url: '/sampleform',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step5AddSampleWorkS.html',
        controller: 'step5AddSampleWorkSCtrl'
      }
    }
  })

  .state('dashboard.step6AddAdditionalExperience', {
    url: '/additionalexperience',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step6AddAdditionalExperience.html',
        controller: 'step6AddAdditionalExperienceCtrl'
      }
    }
  })
  .state('dashboard.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'userCtrl'
      }
    }
  })
  .state('dashboard.signup', {
    url: '/signup',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'userCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/dashboard/theme')

  

});