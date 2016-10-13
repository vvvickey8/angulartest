(function () {
    'use strict';
    var employeeService = angular.module('employeeapp');
    employeeService.factory('Employee', ['$resource',
    function ($resource) {
        
        return $resource('employees/:id', {id:'@id'},
         {
             save:{method:"POST"},
             update:{method:"POST"},
             delete:{method:"DELETE"}
                    });
    }
    ]);
})();