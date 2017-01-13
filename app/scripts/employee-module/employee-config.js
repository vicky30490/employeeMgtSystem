'use strict';

/**
 * @ngdoc Sub module 
 * @name employeeMgtApp.employee
 * @description  Route Configation for employee module
 */

angular.module('employeeMgtApp.employee',[])
.config(function($stateProvider){

  $stateProvider  
  .state('employeeDetails', {
    url: '/employeeDetails',
    controller:'employeeController',
    controllerAs :'empCtrl',
    templateUrl: 'scripts/employee-module/views/employeeDetails.html'
  });


}).constant('employeeConstants',{
'EMPLOYEE_DATA_FILE':'/scripts/employee-module/JSON/employee-details.json'

});