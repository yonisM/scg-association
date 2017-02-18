angular.module('app.controllers', [])


.controller('goalCtrl',['$scope', '$stateParams','Customer','$q','$location', 'ModalService','$window','$timeout','$state',
   function ($scope, $stateParams, Customer, $q, $location, ModalService,$window,$timeout,$state) { 
    //Get User ID 
        var id = Customer.getCurrentId();
       
    //Return SavedSection values. Let's us know if section has been saved by User.
        var sectionhasbeensaved = Customer.sectionSaveds({id:id});
       $scope.sectionhasbeensaved = sectionhasbeensaved;
       
//Open and Close Ambition Modal 
    $scope.showAmbitionModal = function() {
        ModalService.showModal({
        templateUrl: 'views/ambition.html',
        controller: 'ambitionCtrl'
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
 
//Open and Close Skill Modal 
    $scope.showSkillModal = function() {
        ModalService.showModal({
        templateUrl: 'views/skill.html',
        controller: 'skillCtrl'
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
   
//Open and Close Opportunities Modal 
    $scope.showOpportunityModal = function() {
        ModalService.showModal({
        templateUrl: 'views/opportunity.html',
        controller: 'opportunityCtrl'
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
 
}])


.controller('ambitionCtrl',['$scope', '$stateParams','Customer','$q','$location', 'ModalService','$window','$timeout','$state',
   function ($scope, $stateParams, Customer, $q, $location, ModalService,$window,$timeout,$state) { 
          //Get User ID 
        var id = Customer.getCurrentId();
       
    //Return SavedSection values. Let's us know if section has been saved by User.
        var sectionhasbeensaved = Customer.sectionSaveds({id:id});
       $scope.sectionhasbeensaved = sectionhasbeensaved;
       
       //Handle ambition
       var ambition = {
           howToAcheive:"",
           yourAmbition:""
       };
       
       
       //Return User's ambition from the database
    var ambition = Customer.ambitions({id:id});
    $scope.ambition = ambition;
       
       
       //Send User's ambition to the database for the first time
       $scope.sendAmbition = function(){
           Customer.ambitions.create({id:id},ambition)
           .$promise
           .then(function(){
                Customer.sectionSaveds.update({id:id},{ambition:false});
                location.reload();
           });
       };
       
       
       //Update User's ambition in the database
       $scope.updateAmbition = function(){
           Customer.ambitions.update({id:id},ambition)
           .$promise
           .then(function(){
                location.reload();
           });
       };
   }])


.controller('skillCtrl',['$scope', '$stateParams','Customer','$q','$location', 'ModalService','$window','$timeout','$state',
   function ($scope, $stateParams, Customer, $q, $location, ModalService,$window,$timeout,$state) { 
            
       //Get User ID 
        var id = Customer.getCurrentId();
       
    //Return SavedSection values. Let's us know if section has been saved by User.
        var sectionhasbeensaved = Customer.sectionSaveds({id:id});
       $scope.sectionhasbeensaved = sectionhasbeensaved;
       
       //Handle Skill
       var skill = {
           currentOccupation:"",
           skillsToSucceedAtOccuptation:"",
           skillsToDevelop:"",
       };
       
       
       //Return User's Skill from the database
    var skill = Customer.skills({id:id});
    
       $scope.skill = skill;
       
       
       //Send User's Skill to the database for the first time
       $scope.sendSkill = function(){
           Customer.skills.create({id:id},skill)
           .$promise
           .then(function(){
                Customer.sectionSaveds.update({id:id},{skill:false});
                location.reload();
           });
       };
       
       
       //Update User's Skill in the database
       $scope.updateSkill = function(){
           Customer.skills.update({id:id},skill)
           .$promise
           .then(function(){
                location.reload();
           });
       };

   }])


.controller('opportunityCtrl',['$scope', '$stateParams','Customer','$q','$location', 'ModalService','$window','$timeout','$state',
   function ($scope, $stateParams, Customer, $q, $location, ModalService,$window,$timeout,$state) { 
       
    //Get User ID 
        var id = Customer.getCurrentId();
       
    //Return SavedSection values. Let's us know if section has been saved by User.
        var sectionhasbeensaved = Customer.sectionSaveds({id:id});
       $scope.sectionhasbeensaved = sectionhasbeensaved;
       
       //Handle Opportunity
       var opportunity = {
           academicPublication:"",
           anythingElse:"",
           fullTimeNonAcademicJob:"",
           booksArticles:"",
           lecture:"",
           podcast:"",
           teaching:"",
           website:"",
           moreAboutWebsite:""
       };
       
       
    //Return User's Opportunity from the database
        var opportunity = Customer.opportunities({id:id});
       $scope.opportunity = opportunity;
       
       
 //Send User's Opportunity to the database for the first time
       $scope.sendOpportunity = function(){
           Customer.opportunities.create({id:id},opportunity)
           .$promise
           .then(function(){
                Customer.sectionSaveds.update({id:id},{opportunity:false});
                location.reload();
           });
       };
       
       
//Update User's Opportunity in the database
       $scope.updateOpportunity = function(){
           Customer.opportunities.update({id:id},opportunity)
           .$promise
           .then(function(){
                location.reload();
           });
       };

   }])
       
       

.controller('dashboardCtrl',['$scope', '$stateParams','Customer','$q','$location', 'ModalService','$window','$timeout','$state',
   function ($scope, $stateParams, Customer, $q, $location, ModalService,$window,$timeout,$state) { 
       
//Get User ID 
    var id = Customer.getCurrentId(); 
       
//Return SavedSection values. Let's us know if section has been saved by User.
    var sectionhasbeensaved = Customer.sectionSaveds({id:id});
       $scope.sectionhasbeensaved = sectionhasbeensaved;
    
   
//Return User Personal Details
  var customerDetails = Customer.personalDetails({id:id});
     $scope.customerDetails = customerDetails; 
       
       
//Open and Close Summary Modal 
    $scope.showSummaryModal = function() {
        ModalService.showModal({
        templateUrl: 'views/step3Summary.html',
        controller: 'step3SummaryCtrl'
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };  
       
//Open and Close Field Of Research Modal 
    $scope.showFieldresearchModal = function() {
        ModalService.showModal({
            templateUrl: 'views/step4AdditionalInformationAboutYourself.html',
            controller: 'step4AdditionalInformationAboutYourselfCtrl'
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };        
          
  }])


.controller('themeCtrl',['$scope', '$stateParams','Customer','$q','$location','$timeout',
   function ($scope, $stateParams, Customer, $q, $location,$timeout) {                                  
                                     
    
$scope.getUserEntry = function(){

//Get User ID 
    var id = Customer.getCurrentId(); 
       
//Return SavedSection values
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});

//Return User's Summary Entry
    $timeout(function(){     
    var summary = Customer.summaries({id:id});
    $scope.summary = summary; 
    },1000);
        
        

//Return User's Additional Information 
     $timeout(function(){ 
    var additionalInformation = Customer.additionalInformations({id:id}); 
    $scope.additionalInformation = additionalInformation; 
          },3000);
    
           
//Return User's Sample Work
    $timeout(function(){
    var sampleWork1 = Customer.sampleWork1s({id:id});
    var sampleWork2 = Customer.sampleWork2s({id:id});
    var sampleWork3 = Customer.sampleWork3s({id:id});
     
    $scope.sampleWork1 = sampleWork1;
    $scope.sampleWork2 = sampleWork2;
    $scope.sampleWork3 = sampleWork3;
      },5000);
                

//Return User's additional experience
    $timeout(function(){       
   var additionalXP = Customer.additionalXPs({id:id}); 
    $scope.additionalXP = additionalXP;    
            },8000);     
          
       };
       


       
       
$scope.getUserEntryForSecondPage = function(){
    
    //Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
    //Return SavedSection values
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});
    

    //Return User's additional experience
    $timeout(function(){       
   var additionalXP = Customer.additionalXPs({id:id}); 
    $scope.additionalXP = additionalXP;    
            },1000);     
          
      
    
    //Return User's Detail 1
       $timeout(function(){ 
       var details1 = Customer.details1s({id:id});
         $scope.details1 = details1;
       },2000);
  
         
         
    //Return User's Detail 2
    $timeout(function(){ 
       var details2 = Customer.details2s({id:id});
          $scope.details2 = details2;
    },3000);
         
           
    //Return User's Detail 3
    $timeout(function(){
       var details3 = Customer.details3s({id:id});
          $scope.details3 = details3;
         },4000);
         
         
    //Return User's Detail 4
        $timeout(function(){
       var details4 = Customer.details4s({id:id});  
          $scope.details4 = details4;
             },5000);
         
      
    //Return User's Detail 5
        $timeout(function(){
       var details5 = Customer.details5s({id:id});
          $scope.details5 = details5;
             },6000);
    
         
     //Return User's Detail 6
        $timeout(function(){
       var details6 = Customer.details6s({id:id});
          $scope.detaisl6 = details6;
             },7000);
         
         
     };
       
 
   }])
                                     

.controller('step1SelectAThemeCtrl',['$scope', '$stateParams', 'Theme', 'Customer','$state',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//Theme is a factory declared in the lb-services. Please see lb-services.js file for list of methods                                   
function ($scope, $stateParams, Theme, Customer,$state,ModalService) {

//Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
//Return SavedSection values
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});
    
    
    
//Get all Themes from the Database
    $scope.theme = Theme.find(); 
    
//selected theme
    var selectedTheme = {
        selectedTheme: ""
        };
   $scope.selectedTheme = selectedTheme; 
    
//Get Current user
    $scope.currentUser = Customer.getCurrentId()

//Return User's Selected Theme
   var selectedTheme = Customer.themeSelections({id:id});
    $scope.selectedTheme = selectedTheme;
    


// Save Customer's Theme selection into the database for the first time     
  $scope.saveTheme = function(selectedTheme){
      Customer.themeSelections.create({id:id},selectedTheme)
      .$promise
      .then(function(){
           Customer.sectionSaveds.update({id:id},{themes:false})
               .$promise
               .then(function(){
               $state.go("dashboard");
               location.reload();
           });
          
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
   
.controller('step2AddPersonalDetailsCtrl', ['$scope', '$stateParams','PersonalDetails','Customer','LoopBackAuth','$q','$state','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, PersonalDetails,Customer,LoopBackAuth,$q,$state,$timeout) {
    

    //Get the Customer's Users ID number
    var customerID = Customer.getCurrentId();
    $scope.customerID = customerID;
    

    var customerDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        linkedin:"",
        resume: "",
    };
    
    
   $scope.customerDetails = customerDetails;
    
   //section has been saved
     var sectionSaved = {
        personalDetails: true,
        themes: true,
        summary: true,
        samplework1: true,
        samplework2: true,
        samplework3: true,
        details1:true,
        details2:true,
        details3:true,
        details4:true,
        details5:true,
        details6:true,
        fieldOfResearch: true,
        additionalExperience: true,
        goals: true,
        ambition:true,
        skill:true,
        opportunity:true
    };
    
    $scope.sectionSaved = sectionSaved;
    
    
   $scope.sectionhasbeensaved = Customer.sectionSaveds({id:customerID});
    
 
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
        .then(function(){
            Customer.sectionSaveds.create({id:customerID},sectionSaved);    
            $timeout(function(){
                $state.go("myaccount"); 
            },1500);
        });       
    };
    
        
    //Update Personal Details when user has made an entry before.  
  
    $scope.updateDetails = function(){
        Customer.personalDetails.update({id:customerID},customerDetails)
        .$promise
        .then(function(){
        $timeout(function(){
                $state.go("myaccount"); 
            },1500);
        }); 
        
    };
        
}])
   
.controller('step3SummaryCtrl', ['$scope', '$stateParams','Summary','$q','Customer','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Summary, $q, Customer, $state) {

  //Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
  //Return SavedSection values
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});
    
    
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
    
    
//return all Customer's Summary entry   
    
    var summary = Customer.summaries({id:id});
    $scope.summary = summary; 
    

    
 //Save Customer's Summary to the database for the first time.
    $scope.sendSummary = function(){
         Customer.summaries.create({id:id},summary)
         .$promise
         .then(function(){
            Customer.sectionSaveds.update({id:id},{summary:false})
               .$promise
               .then(function(){
               location.reload();
           });
             
         });
    }; 
    
    
//Update Customer's Summary when user has made an entry before.  
  
    $scope.updateSummary = function(){
        Customer.summaries.update({id:id},summary)
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
    
    //Get Current Customer's User ID. 
    var id = Customer.getCurrentId();
    
  //Return SavedSection values
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});
    
    var  additionalInformation = {
         fieldOfResearch: "",
         image: "",
         sectionIncluded:false,
         summarySection: "",
         showSaveButton:true
        }; 
    
    $scope.additionalInformation = additionalInformation; 
    
    
    
    //Get Customer's Additional Information 
    var additionalInformation = Customer.additionalInformations({id:id}); 
    $scope.additionalInformation = additionalInformation; 
    
    

    
    //Save Customer's Additional Information to the database for the first time.
    $scope.sendAdditionalInformation = function(){
         Customer.additionalInformations.create({id:id},additionalInformation)
         .$promise
         .then(function(){
             Customer.sectionSaveds.update({id:id},{fieldOfResearch:false})
               .$promise
               .then(function(){
               $state.go("dashboard");
               location.reload();
           });
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
   
.controller('step5AddSampleWorkSCtrl', ['$scope', '$stateParams','Customer','$state','ModalService','Container', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Customer,$state,ModalService,Container) {
    

//Open and Close Sample Work 1 Modal 
 $scope.showSampleWork1 = function() {
    ModalService.showModal({
    templateUrl: "views/samplework1.html",
    controller: "sample1Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    
//Open and Close Sample Work 2 Modal 
 $scope.showSampleWork2 = function() {
    ModalService.showModal({
    templateUrl: "views/samplework2.html",
    controller: "sample2Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    
//Open and Close Sample Work 3 Modal 
 $scope.showSampleWork3 = function() {
    ModalService.showModal({
    templateUrl: "views/samplework3.html",
    controller: "sample3Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    
      
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
     
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});


    
// Get Container Details   
var landsome = "landsome";
var fileToDownload = "Yonis initial analysis nerai website.docx"; 
    
  var load = Container.getFile({container:landsome},{files:fileToDownload});
  $scope.load = load; 
    
    
$scope.download = function(landsome,fileToDownload){
    Container.getFile({container:landsome},{files:fileToDownload});
};    
    

}])



.controller('sample1Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state,Container,FileUploader) {
  
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
     
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});   
           
    
     
//handling the sample work models
      var sampleWork1 = {heading:"",title:"",author:"",date: "",publication:"",description:"",sampleWorkURL:"",image:"", button:""};
            

//Get Customer's Sample Work from Database. Information will be received
    var sampleWork1 = Customer.sampleWork1s({id:id});
    $scope.sampleWork1 = sampleWork1;
            
            
//Save Customer's sampleWork to the database for the first time.
$scope.sendSample1 = function(){   
    Customer.sampleWork1s.create({id:id},sampleWork1)
     .$promise
     .then(function(){
            Customer.sectionSaveds.update({id:id},{samplework1:false});
            location.reload();
              });   
                 }; 
            
//Update Customer's Summary when user has made an entry before.  
$scope.updateSample1 = function(){
    Customer.sampleWork1s.update({id:id},sampleWork1)
     .$promise
     .then(function(){
      location.reload();
            }); 
    };      
            
            
          
            
}])

.controller('sample2Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {
            
  //Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
     
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id}); 
     
            
 //handling the sample work models           
    var sampleWork2 = {heading:"",title:"",author:"",date: "",publication:"",description:"",sampleFile:"",sampleWorkURL:"",image:"", button:""};       

 //Get Customer's Sample Work from Database. Information will be received
    var sampleWork2 = Customer.sampleWork2s({id:id});
    $scope.sampleWork2 = sampleWork2;
            
 //Save Customer's sampleWork to the database for the first time.
   $scope.sendSample2 = function(){   
        Customer.sampleWork2s.create({id:id},sampleWork2)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{samplework2:false});
            location.reload();
              });   
                 };          
            
            
//Update Customer's Summary when user has made an entry before.        
$scope.updateSample2 = function(){
    Customer.sampleWork2s.update({id:id},sampleWork2)
            .$promise
            .then(function(){
            location.reload();
        }); 
    };
            
}])


.controller('sample3Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {
            
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
     
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id}); 
            
            
//handling the sample work models 
 var sampleWork3 = {heading:"",title:"",author:"",date: "",publication:"",description:"",sampleFile:"",sampleWorkURL:"",image:"", button:""};
 

//Get Customer's Sample Work from Database. Information will be received
    var sampleWork3 = Customer.sampleWork3s({id:id});         
    $scope.sampleWork3 = sampleWork3;
            
//Save Customer's sampleWork to the database for the first time.         
 $scope.sendSample3 = function(){   
        Customer.sampleWork3s.create({id:id},sampleWork3)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{samplework3:false});
            location.reload();
              });   
                 };           
                  
//Update Customer's Summary when user has made an entry before.      
    $scope.updateSample3 = function(){
        Customer.sampleWork3s.update({id:id},sampleWork3)
            .$promise
            .then(function(){
            location.reload();
        }); 
    };      
            
}])


.controller('step6AddAdditionalExperienceCtrl', ['$scope','$stateParams','$timeout','Customer','$q','$state','ModalService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout,Customer,$q,$state,ModalService) {

 //Open and Close Detail 1 Modal 
 $scope.showDetail1Modal = function() {
    ModalService.showModal({
    templateUrl: "views/details1.html",
    controller: "details1Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    
//Open and Close Detail 2 Modal 
 $scope.showDetail2Modal = function() {
    ModalService.showModal({
    templateUrl: "views/details2.html",
    controller: "details2Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    
//Open and Close Detail 3 Modal 
 $scope.showDetail3Modal = function() {
    ModalService.showModal({
    templateUrl: "views/details3.html",
    controller: "details3Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };

    //Open and Close Detail 4 Modal 
 $scope.showDetail4Modal = function() {
    ModalService.showModal({
    templateUrl: "views/details4.html",
    controller: "details4Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    
    //Open and Close Detail 5 Modal 
 $scope.showDetail5Modal = function() {
    ModalService.showModal({
    templateUrl: "views/details5.html",
    controller: "details5Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    //Open and Close Detail 6 Modal 
 $scope.showDetail6Modal = function() {
    ModalService.showModal({
    templateUrl: "views/details6.html",
    controller: "details6Ctrl"    
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
  });
 };
    
    //Handling additional experience 
    var additionalXP ={
        sectionIncluded:"",
        heading:"",
        summary:"",
        image:"",
        button:"",
        secondpageheading:"",
        secondpagesubheading:"",
    };
    


//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
     
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});    
    
    
//Get Customer's AdditionalXP from Database
    var additionalXP = Customer.additionalXPs({id:id}); 
    $scope.additionalXP = additionalXP; 
     

//Save User's additionalXP to the database for the first time 
    $scope.sendAdditionalXP = function(){
        Customer.additionalXPs.create({id:id},additionalXP)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{additionalExperience:false});
            location.reload();
        });
    };
    
//Update User's exisiting additionalXP to the database
 $scope.updateAdditionalXP = function(){
        Customer.additionalXPs.update({id:id},additionalXP)
        .$promise
        .then(function(){
            location.reload();
        });
    };

}])




    
.controller('details1Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {
  
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
            
//Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information 
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});  
   

 var details1 ={heading:"", summary:"", button:"", image:""};
        
 //Get Detail 1 from Database           
var details1 = Customer.details1s({id:id});
    $scope.details1 = details1;
            
//Send Detail 1 to database
    $scope.sendAddDetails1 = function(){
        Customer.details1s.create({id:id},details1)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{details1:false});
            location.reload();   
        });
    };
            
//Update Detail 1
    $scope.updateDetails1 = function(){
     Customer.details1s.update({id:id},details1)
        .$promise
        .then(function(){
        location.reload();  
        });
    }; 
     
}])
            

.controller('details2Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {
        
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
            
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id}); 
            
    var details2 ={heading:"", summary:"", button:"", image:""};         

//Get Detail 2 from Database
    var details2 = Customer.details2s({id:id});
         $scope.details2 = details2;

            
//Send Detail 2 to database
    $scope.sendAddDetails2 = function(){
        Customer.details2s.create({id:id},details2)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{details2:false});
            location.reload();   
        });
    };
    
//Update Detail 2
    $scope.updateDetails2 = function(){
        Customer.details2s.update({id:id},details2)
        .$promise
        .then(function(){
        location.reload();  
        });
    };

}])


.controller('details3Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
            
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});   
            
var details3 ={ heading:"", summary:"", button:"", image:""};

//Get Detail 3 from Database
var details3 = Customer.details3s({id:id});
$scope.details3 = details3; 
         
            
//Send Detail 3 to database
   $scope.sendAddDetails3 = function(){
            Customer.details3s.create({id:id},details3)
            .$promise
            .then(function(){
                Customer.sectionSaveds.update({id:id},{details3:false});
                location.reload();   
        });
    };           

//Update Detail 3
                 
    $scope.updateDetails3 = function(){
            Customer.details3s.update({id:id},details3)
        .$promise
        .then(function(){
            location.reload();  
        });
    }; 

}])



.controller('details4Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {

//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
            
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id}); 
            
 var details4 ={ heading:"", summary:"", button:"", image:""};

//Get Detail 4 from Database
            
var details4 = Customer.details4s({id:id});
$scope.details4 = details4; 
     
            
//Send Detail 4 to database
    $scope.sendAddDetails4 = function(){
        Customer.details4s.create({id:id},details4)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{details4:false});
            location.reload();   
        });
    };
            
//Update Detail 4  
$scope.updateDetails4 = function(){
    Customer.details4s.update({id:id},details4)
    .$promise
    .then(function(){
            location.reload();  
        });
    }
     
                
            
}])



.controller('details5Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
            
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id}); 

/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
         
  var details5 ={ heading:"", summary:"", button:"", image:""};

//Get Detail 5 from Database
    
var details5 = Customer.details5s({id:id});
$scope.details5 = details5; 
                 
//Send Detail 5 to database
            
   $scope.sendAddDetails5 = function(){
            Customer.details5s.create({id:id},details5)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{details5:false});
            location.reload();   
        });
    };
            
//Update Detail 5
    $scope.updateDetails5 = function(){
            Customer.details5s.update({id:id},details5)
            .$promise
            .then(function(){
                location.reload();  
        });
    };           
            
            
}])


.controller('details6Ctrl', ['$scope','$stateParams','Customer','$q','$state',
        function ($scope, $stateParams,Customer,$q,$state) {
//Get Current Customer's User ID. 
     var id = Customer.getCurrentId();
            
/*Return sectionSaveds values.See the Controller step2AddPersonalDetailsCtrl for more information */
    $scope.sectionhasbeensaved = Customer.sectionSaveds({id:id});         

        
var details6 ={heading:"", summary:"", button:"", image:""};
  
//Get Detail 6 from Database
var details6 = Customer.details6s({id:id});
        $scope.details6 = details6; 
 
//Send Detail 6 to database
$scope.sendAddDetails6 = function(){   
    Customer.details6s.create({id:id},details6)
        .$promise
        .then(function(){
            Customer.sectionSaveds.update({id:id},{details6:false});
            location.reload();   
        });
    };

//Update Detail 6
$scope.updateDetails6 = function(){
    Customer.details6s.update({id:id},details6)
        .$promise
        .then(function(){
            location.reload();  
        });
    };

}])

.controller('userCtrl', ['$scope', '$stateParams','Customer','$state','$q','$timeout','ModalService','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

    
function ($scope, $stateParams,Customer,$state,$q,$timeout,ModalService,$timeout) {
   
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
    
    $scope.loginButton = "Log In";
    
    var login = {
      email:"",
        password:"" 
    };
    
    
    $scope.login = login; 
    
    $scope.loginUser = function(){
        Customer.login(login)
        .$promise
        .then(function(success) {
            $scope.loginButton = "Login Successful...Please Wait.";
     
            $timeout(function(){
                $state.go('dashboard');
            },2000);
            
             $timeout(function(){
                location.reload();
            },3000);
            
        },function(reason){
            $scope.loginerror = true;  
        });
         
    };
    
    
    //Login an new user via success signup page
      $scope.loginNewUser = function(){
        Customer.login(login)
        .$promise
        .then(function(success) {
    $scope.loginButton = "Login Successful...Please Wait.";
         $timeout(function(){
                $state.go('step2AddPersonalDetails');
            },2000);   
        },function(reason){
            $scope.loginerror = true;  
        });
         
    };
    
    //To Sign Up Page
    $scope.toSignup = function(){
        location.reload();
        $state.go('signup');
         
    };
    
//Open and Close Login Modal 
    $scope.loginModal = function() {
        ModalService.showModal({
            templateUrl: 'views/login.html',
            controller: 'userCtrl'
  }).then(function(modal) {
   modal.element.modal();
    modal.close.then(function(result) {
      //console.log(result);
    });
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

}]) 





