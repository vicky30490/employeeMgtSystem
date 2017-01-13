'use strict';

/**
 * @ngdoc controller
 * @name employeeMgtApp.controller:employeeController
 * @description Controller for employee details
  */
angular.module('employeeMgtApp.employee')
  .controller('employeeController', function ($http,employeeConstants) {

var self=this;

/**
    * @ngdoc function
    * @name init   
    * @description function to initialize the controller
   
    */
 var init=function(){

    self.viewTabFlags={
                      'cardView':true,
                      'detailView':false,
                      'listView':false
                      };

    self.sortOptions=[
                      {'id':"name",'description':'Name'},
                      {'id':'doj' ,'description':'Date Of Joining'},
                      {'id':'dob','description':'Date of Birth'}
                    ];

    $http.get(employeeConstants.EMPLOYEE_DATA_FILE).then(function(resp){
		self.empData=resp.data.employeeDetails;	
      });  

    
  };  

init();

/**
    * @ngdoc Method
    * @name sortEmployees   
    * @description this method sorts on basis of selected sortOption from dropdown 
    */

self.sortEmployees=function(){ 
self.orderByField=self.sortOption;
}


/**
    * @ngdoc Method
    * @name addEmployee   
    * @description  Method  to add a new Employe to existing List
   
    */

self.addEmployee=function(employeeInfo){
  self.empData.push(employeeInfo);
}


/**
    * @ngdoc Method
    * @name toggleTab   
    * @description method to display active tabls during toggle between different views
   
    */
self.toggleTab=function(viewType){
  self.viewTabFlags={
                  'cardView':false,
                  'detailView':false,
                  'listView':false
                  };
    self.viewTabFlags[viewType] =true;
};

  });
