angular.module('app.controllers', [])



.controller('dashboardCtrl',['$scope', '$stateParams','Customer','$q','$location',
   function ($scope, $stateParams, Customer, $q, $location) { 
       
       var dashboardTiles = [
           {
            heading:"Step 1: Themes",
            glyphicon:"glyphicon glyphicon-pencil",
            link:"step1SelectATheme",
            nameOfLink:"Go to Theme"  
           },
           {
            heading:"Step 2: Personal Details",
            glyphicon:"glyphicon glyphicon-user",
            link:"step2AddPersonalDetails",
            nameOfLink:"Go To Personal Details" 
           },
           {
            heading:"Step 3: Summary",
            glyphicon:"glyphicon glyphicon-eye-open",
            link:"step3Summary",
            nameOfLink:"Go to Summary"   
           },
           {
            heading:"Step 4: Additional Information",
            glyphicon:"glyphicon glyphicon-info-sign",
            link:"step4AdditionalInformationAboutYourself",
            nameOfLink:"Go to Additional Information"   
           },
           {
            heading:"Step 5: Sample Work",
            glyphicon:"glyphicon glyphicon-file",
            link:"step5AddSampleWorkS",
            nameOfLink:"Go to Sample Work"  
           },
            {
            heading:"Step 6: Additional Experience",
            glyphicon:"glyphicon glyphicon-folder-open",
            link:"step6AddAdditionalExperience",
            nameOfLink:"Go to Additional Experience"  
           }
           
       ];
       
       $scope.dashboardTiles = dashboardTiles; 
       


  }])

.controller('themeCtrl',['$scope', '$stateParams','Customer','$q','$location',
   function ($scope, $stateParams, Customer, $q, $location) {                                  
                                     
       // Returning Users from All Pages
       
//Get User ID 
    var id = Customer.getCurrentId(); 

//Return User's Summary Entry
var summary = Customer.summaries({id:id});
    $scope.summary = summary; 

//Return User's Additional Information 
    var additionalInformation = Customer.additionalInformations({id:id}); 
    $scope.additionalInformation = additionalInformation; 

//Return Customer's Sample Work
    var sampleWork = Customer.sampleWorks({id:id});
    $scope.sampleWork = sampleWork; 

/*Get Customer's AdditionalXP
    var additionalXP = Customer.additionalXPs({id:id}); 
    $scope.additionalXP = additionalXP; */ 
       
       
       
      
   }])
                                     

.controller('step1SelectAThemeCtrl',['$scope', '$stateParams', 'Theme', 'Customer',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//Theme is a factory declared in the lb-services. Please see lb-services.js file for list of methods                                   
function ($scope, $stateParams, Theme, Customer) {

//Get all Themes from the Database
    $scope.theme = Theme.find(); 
    
//Default Theme Selection
    var selectedTheme = {
        selectedTheme: ""
        
    };
   $scope.selectedTheme = selectedTheme; 
    
//Get User ID 
    var id = Customer.getCurrentId(); 
    
//Return User's Selected Theme
    
   var selectedTheme = Customer.themeSelections({id:id});
 $scope.selectedTheme = selectedTheme;
    
    

    
    // Check themeSelected returns a value
   $scope.hasThemeSelectedFunc = function(){
           selectedTheme
            .$promise
            .then(function(success){
               $scope.hasThemeSelected = true;
           },function(reason){
               $scope.hasThemeSelected = false;
           });
   };
        
    
    
// Save Customer's Theme selection into the database for the first time     
  $scope.saveTheme = function(selectedTheme){
      Customer.themeSelections.create({id:id},selectedTheme)
      .$promise
      .then(function(){
           location.reload();
      }); 
      
  };
    
    
    
        
// Update User's Theme when user has made an entry before.     
  $scope.updateTheme = function(selectedTheme){
      Customer.themeSelections.update({id:id},selectedTheme)
      .$promise
      .then(function(){
           location.reload();
      }); 
      
  };
    
    
}])
   
.controller('step2AddPersonalDetailsCtrl', ['$scope', '$stateParams','PersonalDetails','Customer','LoopBackAuth','$q','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, PersonalDetails,Customer,LoopBackAuth,$q,$state) {
    
 
    var customerDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        linkedin:"",
        resume: "",
    };
    
    $scope.customerDetails = customerDetails; 
    
    //Get the Customer's Users ID number
    var customerID = Customer.getCurrentId();
    
    
    //Return User Personal Details
  var customerDetails = Customer.personalDetails({id:customerID});
     $scope.customerDetails = customerDetails; 
    
  
    
    
    // Check customerEntrySummary returns a value
   $scope.hasCustomerEnteredPersonalFunc = function(){
           customerDetails
            .$promise
            .then(function(success){
               $scope.hasCustomerEnteredPersonal = true;
           },function(reason){
               $scope.hasCustomerEnteredPersonal = false;
           });
   };
    
    

    //Save Customer's Personal Information to the database for the first time.
    $scope.sendDetails = function(){  
    
        Customer.personalDetails.create({id:customerID},customerDetails)
        .$promise
        .then(function(getCustomerDetails){
            location.reload();
            $state.go("dashboard.step3Summary"); 
        });       
    };
    
        
    //Update Personal Details when user has made an entry before.  
  
    $scope.updateDetails = function(){
        Customer.personalDetails.update({id:customerID},customerDetails)
        .$promise
        .then(function(){
          location.reload();
        }); 
        
    };
        
        
        


}])
   
.controller('step3SummaryCtrl', ['$scope', '$stateParams','Summary','$q','Customer', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Summary, $q, Customer) {


    var summary = {
        portfolioHeading:"",
        portfolioSubHeading: "",
        heading: "",
        summary: "",
        button: ""
    };
    
    $scope.summary = summary;
    
    
    
//Return Customers Login Details (except password)    
   var getPersonalDetails = Customer.getCurrent();
   $scope.getPersonalDetails = getPersonalDetails; 
    
    
//Get User ID and return all Customer's Summary entry   
    var id = Customer.getCurrentId();
    
    var summary = Customer.summaries({id:id});
    $scope.summary = summary; 
    
// Function below checks if user has made entry returns a value
   $scope.hasCustomerEnteredSummaryFunc = function(){
           summary
            .$promise
            .then(function(success){
               $scope.hasCustomerEnteredSummary = true;
           },function(reason){
               $scope.hasCustomerEnteredSummary = false;
           });
   };
    
 //Save Customer's Summary to the database for the first time.
    $scope.sendSummary = function(){
         Customer.summaries.create({id:id},summary)
         .$promise
         .then(function(){
            location.reload();
            $state.go("dashboard.step4AdditionalInformationAboutYourself"); 
             
         });
    }; 
    
    
//Update Customer's Summary when user has made an entry before.  
  
    $scope.updateSummary = function(){
        Customer.summaries.update({id:id},customerDetails)
        .$promise
        .then(function(){
          location.reload();
        }); 
        
    };
        
    
    
    
}])
      
.controller('step4AdditionalInformationAboutYourselfCtrl', ['$scope', '$stateParams', 'Customer','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Customer,$state) {
    

    
    var  additionalInformation = {
         fieldOfResearch: "",
         image: "",
         sectionIncluded:false,
         summarySection: "",
         showSaveButton:true
        }; 
    
    $scope.additionalInformation = additionalInformation; 
    
    
    
    //Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
    //Get Customer's Additional Information 
    var additionalInformation = Customer.additionalInformations({id:id}); 
    $scope.additionalInformation = additionalInformation; 
    
    
       // Check customerEntryAdditionalInformation returns a value
   $scope.hasCustomerEnteredAdditonalFunc = function(){
           additionalInformation
            .$promise
            .then(function(success){
               $scope.hasCustomerEnteredAdditonal = true;
           },function(reason){
               $scope.hasCustomerEnteredAdditonal = false;
           });
   };
    
    
    
    //Save Customer's Additional Information to the database for the first time.
    $scope.sendAdditionalInformation = function(){
         Customer.additionalInformations.create({id:id},additionalInformation)
         .$promise
         .then(function(){
             location.reload();
             $state.go(dashboard.step5AddSampleWorkS);
         });
    };
    
    
    
    //Update Customer's Summary when user has made an entry before.  
  
    $scope.updateAdditionalInformation = function(){
        Customer.additionalInformations.update({id:id},additionalInformation)
        .$promise
        .then(function(){
          location.reload();    
        }); 
        
    };
        
    
    
    
 

}])
   
.controller('step5AddSampleWorkSCtrl', ['$scope', '$stateParams','Customer','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Customer,$state) {
    
    
    //numberSample
    $scope.numberSample = ["1","2","3"];

    //handing the sample work 
    
    var sampleWork = [{
        heading:"",
        title:"",
        author:"",
        date: "",
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
        
    //display the selected amount of forms
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
        
      
    //Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
    //Get Customer's Sample Work
    var sampleWork = Customer.sampleWorks({id:id}); 
    $scope.sampleWork = sampleWork; 
    
    
    //Save Customer's Personal Information to the database for the first time.
    $scope.sendDetails = function(){  
        Customer.sampleWorks.createMany({id:id},sampleWork)
        .$promise
        .then(function(){
            location.reload();
            $state.go("dashboard.step3Summary"); 
        });       
    };
    
}])
   
.controller('step6AddAdditionalExperienceCtrl', ['$scope', '$stateParams','$timeout','Customer','$q','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout,Customer,$q,$state) {

    //Handling additional experience 
    var additionalXP = {
        heading:"",
        summary:"",
        image:"",
        button:"",
        secondpageheading:"",
        secondpagesubheading:"",
        Details:Details,
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
    
    
  //Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
    //Get Customer's AdditionalXP
    var additionalXP = Customer.additionalXPs({id:id}); 
    $scope.additionalXP = additionalXP; 
        
    
    
//Save User's additionalXP to the database for the first time 
    $scope.sendAdditionalXP = function(){
        Customer.additionalXPs.createMany({id:id},additionalXP)
        .$promise
        .then(function(){
            
        });
        
        
    };
    
    
  
    

}])
.controller('userCtrl', ['$scope', '$stateParams','Customer','$state','$q','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

    
function ($scope, $stateParams,Customer,$state,$q,$timeout) {
   
    $scope.signuperror = false;
    $scope.loginerror = false; 
    
    //sign up a new user
    var signup = {
        email: "",
        password:"" 
    }
    $scope.signup = signup;   
    
     $scope.register = function() {
      Customer.create(signup)
        .$promise
      .then(function(success){
           $state.go('login')
      },function(reason){
           $scope.signuperror = true;
        })
     }; 


    //Login a user  
    var login = {
      email:"",
        password:"" 
    };
    
    
    $scope.login = login; 
    
    $scope.loginUser = function(){
        Customer.login(login)
        .$promise
        .then(function(success) {
    $state.go('dashboard');
        },function(reason){
            $scope.loginerror = true;  
        });
         
    };
    
    //Logout the user
    
   $scope.logoutUser = function(){
    Customer.logout()
    .$promise
    .then(function() {
    $state.transitionTo('home');
            location.reload();
        }); 
    };
    
    
    

    
    
    //Get Current Customer information
    $scope.currentUser = Customer.getCurrent();
    $scope.isAuthenticated = Customer.isAuthenticated(); 

    //All customer details
   // $scope.AllCustomerDetails = Customer.find();
  

}]) 
