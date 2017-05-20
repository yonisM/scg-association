angular.module('app.controllers', [])


.controller('homeCtrl',['$scope', '$stateParams', function ($scope, $stateParams) { 

 //Controls the speed of image changers.
      $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
    
}])


.controller('donateCtrl',['$scope', '$stateParams', function ($scope, $stateParams) { 

    $scope.single = true;
    $scope.monthly = false;
    $scope.annual = false;
    

    $scope.donationOptionSelection = function(){
        
        selectedDonationOption = $scope.selected;
        
        switch (selectedDonationOption){
            case "single":
                $scope.single = true;
                $scope.monthly = false;
                $scope.annual = false;
                
            break;
                
            case "monthly":
                $scope.single = false;
                $scope.monthly = true;
                $scope.annual = false;
                
            break; 
                
            case "annual":  
                $scope.single = false;
                $scope.monthly = false;
                $scope.annual = true;

            break;  
                
        };
        
    };
   
 

}])



.controller('aboutCtrl',['$scope', '$stateParams', function ($scope, $stateParams) { 

    
 
}])


.controller('vacanciesPartnershipCtrl',['$scope', '$stateParams', function ($scope, $stateParams) { 

 
}])


.controller('headerCtrl',['$scope', '$stateParams', function ($scope, $stateParams) { 

 
}])

.controller('footerCtrl',['$scope', '$stateParams', function ($scope, $stateParams) { 

 
}])


