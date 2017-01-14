'use strict';

/**
 * @ngdoc Service
 * @name employeeMgtApp.controller:employeeService
 * @description Service to display employee data on dashBoard
  */

angular.module('employeeMgtApp.employee').factory('employeeFactory',function(){
	
  var initData={};

	 initData.viewTabFlags={
	                      'cardView':true,
	                      'detailView':false,
	                      'listView':false
	                      };

	 initData.sortOptions=[
	                      {'id':"name",'description':'Name'},
	                      {'id':'doj' ,'description':'Date Of Joining'},
	                      {'id':'dob','description':'Date of Birth'}
	                    ];



return {
    getinitData: function() {
      return initData;
    }
}


});

