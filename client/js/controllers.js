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
    
    
    //numberSample
    $scope.numberSample = ["1","2","3","4","5"];

    //handing the sample work 
    
    var sampleWork = [{
        heading:"",
        title:"",
        author:"",
        date:"",
        publication:"",
        description:"",
        sampleFile:"",
        sampleWorkURL:"",
        image:"",
        button:""
    }];

    $scope.sampleWork = sampleWork;
    
    
    //hide and show the sample form when option selected from the dropdown. Hide the form by default

    
    $scope.showSample = false;
    
    $scope.showSampleFunc = function(selectNumberSample){

        $scope.showSample = true;
        
        
    //display 5 sample forms
    for (var i = 0; i < selectNumberSample; i++ ){
        sampleWork.push({
        heading:"",
        title:"",
        author:"",
        date:"",
        publication:"",
        description:"",
        sampleFile:"",
        sampleWorkURL:"",
        image:"",
        button:""
    });
    }
};
        

}])
   
.controller('step6AddAdditionalExperienceCtrl', ['$scope', '$stateParams','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout) {

    //Handling additional experience 
    var additionalXP = {
        heading:"",
        summary:"",
        image:"",
        button:"",
        secondpageheading:"",
        secondpagesubheading:"",
        Details:Details
    };
    
    $scope.additionalXP = additionalXP; 
    
    
   //Handling Details of Experience 
    var Details =[{
        heading:"",
        summary:"",
        button:"",
        image:""
    }];
    
    $scope.Details = Details;
    
    //show all Details of experience by default
    
    for (var a=0; a<2; a++){
        Details.push({
        heading:"",
        summary:"",
        button:"",
        image:""
         })
    };
    
    //Add more Details of Experience 
    
    $scope.addMoreExperience = function(){ 
    var j = 1;
    for (var i=0; i<j; i++){
        Details.push({
        heading:"",
        summary:"",
        button:"",
        image:""
         })
    };

   
    };
    
 //Remove the selected Detail
    
    $scope.removeDetail = function(index){
     Details.splice(index,1);
       
    };
    
    
  
    

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
    
     $scope.register = function() {
      Customer.create(signup)
        .$promise
        .then(function(){
            $state.go('login');
            location.reload();
        })
     }; 

    
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
            location.reload();
        }); 
    };
    
    //Get Current Customer information
    $scope.currentUser = Customer.getCurrent();
    $scope.isAuthenticated = Customer.isAuthenticated(); 

    //All customer details
    $scope.AllCustomerDetails = Customer.find();
  

}])
 