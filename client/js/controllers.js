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
            heading:"Step 2: Summary",
            glyphicon:"glyphicon glyphicon-eye-open",
            link:"step3Summary",
            nameOfLink:"Go to Summary"   
           },
           {
            heading:"Step 3: Field of Research",
            glyphicon:"glyphicon glyphicon-info-sign",
            link:"step4AdditionalInformationAboutYourself",
            nameOfLink:"Go to Field of Research"   
           },
           {
            heading:"Step 4: Sample Work",
            glyphicon:"glyphicon glyphicon-file",
            link:"step5AddSampleWorkS",
            nameOfLink:"Go to Sample Work"  
           },
            {
            heading:"Step 5: Additional Experience i.e. Teaching",
            glyphicon:"glyphicon glyphicon-folder-open",
            link:"step6AddAdditionalExperience",
            nameOfLink:"Go to Additional Experience"  
           },
             {
            heading:"Step 6: Academic/Non-Academic Goals",
            glyphicon:"glyphicon glyphicon-user",
            link:"fff",
            nameOfLink:"Go to Academic/Non-Academic Goals"  
           }
           
       ];
       
       $scope.dashboardTiles = dashboardTiles; 
       
       
       //Get User ID 
    var id = Customer.getCurrentId(); 
       
       
       //Return User Personal Details
  var customerDetails = Customer.personalDetails({id:id});
     $scope.customerDetails = customerDetails; 
       


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

    //Get Current user
    $scope.currentUser = Customer.getCurrentId()
    
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
          $state.go("dashboard");
      }); 
      
  };
    
    
    
        
// Update User's Theme when user has made an entry before.     
  $scope.updateTheme = function(selectedTheme){
      Customer.themeSelections.update({id:id},selectedTheme)
      .$promise
      .then(function(){
           location.reload();
           $state.go("dashboard");
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
    $scope.customerID = customerID; 
    
    
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
            $state.go("myaccount"); 
        });       
    };
    
        
    //Update Personal Details when user has made an entry before.  
  
    $scope.updateDetails = function(){
        Customer.personalDetails.update({id:customerID},customerDetails)
        .$promise
        .then(function(){
          location.reload();
        $state.go("myaccount"); 
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
            $state.go(dashboard);
             
         });
    }; 
    
    
//Update Customer's Summary when user has made an entry before.  
  
    $scope.updateSummary = function(){
        Customer.summaries.update({id:id},summary)
        .$promise
        .then(function(){
          location.reload();
        $state.go(dashboard);
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
             $state.go(dashboard);
         });
    };
    
    
    
    //Update Customer's Summary when user has made an entry before.  
  
    $scope.updateAdditionalInformation = function(){
        Customer.additionalInformations.update({id:id},additionalInformation)
        .$promise
        .then(function(){
          location.reload();
          $state.go(dashboard);
        }); 
        
    };
        
    
    
    
 

}])
   
.controller('step5AddSampleWorkSCtrl', ['$scope', '$stateParams','Customer','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Customer,$state) {
    
   
     //Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
    var showSaveButton = Customer.sectionSaveds({id:id});
    $scope.showSaveButton = showSaveButton;

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
    
    
    // Add an extra Sample Work 
    $scope.addSampleWork = function(){
        var j = 1;
    for (var i=0; i<j; i++){
        sampleWork.push({sampleWork}); 
        };
    };
    
    
    
    //Remove the selected Detail
    $scope.removeSample = function(index){
     sampleWork.splice(index,1);
       
    };
    
    
    //Get Customer's Sample Work from Database
        var sampleWork = Customer.sampleWorks({id:id}); 
    $scope.sampleWork = sampleWork;
        
    
    
    //Save Customer's Personal Information to the database for the first time.
    $scope.sendDetails = function(){   
        $scope.showSaveButton = false;
        
        Customer.sampleWorks.createMany({id:id},sampleWork)
        .$promise
        .then(function(){
            Customer.sectionSaveds.create({id:id},showSaveButton);
            location.reload();
            $state.go("dashboard"); 
        });     
    };
    
    
     //Update Customer's Summary when user has made an entry before.  
    $scope.updateSample = function(){
         
        Customer.sampleWorks.updateById({id:id},sampleWork)
        .$promise
        .then(function(){
          location.reload();
          $state.go("dashboard");
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
    
    //Number of Details to show by default.
    
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
          $state.go('dashboard');
        });
        
        
    };
    
    
  
    

}])
.controller('userCtrl', ['$scope', '$stateParams','Customer','$state','$q','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

    
function ($scope, $stateParams,Customer,$state,$q,$timeout) {
   
    $scope.signuperror = false;
    $scope.loginerror = false; 
    
    //sign up a new user. Email address and Password only
    var signup = {
        email: "",
        password:"" 
    }
    
     $scope.signup = signup; 
    
 
    //function that will sign up the user
     $scope.register = function() {
    Customer.create(signup)
        .$promise
      .then(function(success){
           $state.go('signupsuccess')
      },function(reason){
           $scope.signuperror = true;
        })
     }; 

    
   
    //Login an exisiting user via login page
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
    
    //Login an new user via success signup page
    
      $scope.loginNewUser = function(){
        Customer.login(login)
        .$promise
        .then(function(success) {
    $state.go('step2AddPersonalDetails');
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
    var customerID = Customer.getCurrentId();
    $scope.customerID = customerID;
    
    $scope.isAuthenticated = Customer.isAuthenticated(); 
    
 

    //All customer details
   // $scope.AllCustomerDetails = Customer.find();
  

}]) 
