angular.module('app.controllers', [])
  
.controller('step1SelectAThemeCtrl',['$scope', '$stateParams', 'Theme',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//Theme is a factory declared in the lb-services. Please see lb-services.js file for list of methods                                   
function ($scope, $stateParams, Theme) {

//Get all Themes from the Database
    $scope.theme = Theme.find(); 
    
//User selects theme and is pushed into Customers.Theme
    var themeSelected = "1";
    $scope.themeSelected = themeSelected; 
    
    
  
    
    
}])
   
.controller('step2AddPersonalDetailsCtrl', ['$scope', '$stateParams','PersonalDetails', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//PersonalDetails is a factory declared in the lb-services.js file. Please see lb-services.js file for list of methods.
//PersonalDetails factory used purely for testing purposes. Will use 
function ($scope, $stateParams, PersonalDetails) {
    
 
    var customerDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        linkedin:"",
        dob: ""
    };
    
    $scope.customerDetails = customerDetails; 
    
    $scope.sendDetails = function(){
        //Customer.PersonalDetails.create(customerDetails)
    }; 
   

}])
   
.controller('step3SummaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('step4AdditionalInformationAboutYourselfCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('step5AddSampleWorkSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('step6AddAdditionalExperienceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('userCtrl', ['$scope', '$stateParams','Customer','$state','$q','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

    
function ($scope, $stateParams,Customer,$state,$q,$timeout) {
   
    //sign up a new user
    var signup = {
        email: "",
        password:"" 
    }
    $scope.signup = signup;   
    
     /*$scope.register = function() {
      Customer.create(signup)
        .$promise
        .then(function(){
            $state.go('dashboard.login');
            location.reload();
        })
     }; */

    
    //Login a user. Test details  
    var login = {
      email:"",
        password:"" 
    };
    
    
    $scope.login = login; 
    
    $scope.loginUser = function(){
        Customer.login(login)
        .$promise
        .then(function() {
    $state.go('dashboard.step1SelectATheme');
    location.reload();
        });
         
    };
    
    //Logout the user
    
   $scope.logoutUser = function(){
    Customer.logout()
    .$promise
    .then(function() {
    $state.transitionTo('dashboard.login');
            $timeout(function(){
            location.reload();
         },3000)
        }); 
    };
    
    //Get Current Customer information
    $scope.currentUser = Customer.getCurrent();
    $scope.isAuthenticated = Customer.isAuthenticated(); 

  

}])
 