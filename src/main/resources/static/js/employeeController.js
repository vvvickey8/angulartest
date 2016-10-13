(function () {
    'use strict';

    angular
        .module('employeeapp')
        .controller('employeeController', employeeController);

    employeeController.$inject = ['$scope','Employee']; 

    function employeeController($scope, Employee) {
       
    	
         $scope.Employees = Employee.query();
         
         
        $scope.result = "";
        $scope.saveEmployee = function() {
            //alert(JSON.stringify($scope.Employee)+"<-----------Test");
             //$scope.Employee.empid = 0;
             //$scope.Employee.Designation=Employee.Designation;
             
             Employee.save($scope.Employee,function(success){
             // alert(JSON.stringify(success));
              $scope.result = JSON.stringify(success);
              window.location.href = '#/';
             },function(error){
               //alert(JSON.stringify(error));
             });
             //window.location.href = '#/';
             
        }
        
        $scope.updateEmployee = function(){
           // alert(JSON.stringify($scope.Employee)+"<-----------Test");
           Employee.update($scope.Employee,function(success){
                //alert(JSON.stringify(success));
                $scope.result = JSON.stringify(success);
                window.location.href = '#/'; 
            },function(error){
                
            });
            //window.location.href = '#/';
        }
        
                 
          
       $scope.deleteEmployee = function(){
        	//$scope.removeEmployee = function(){
            //alert(JSON.stringify($scope.Employees)+"<-----------Test");
            Employee.delete($scope.Employee,function(success){
             //alert(JSON.stringify(success));
            $scope.result = JSON.stringify(success);
                window.location.href = '#/';
            },function(error){
                
            });
           
        }
       
    }
 
})();
