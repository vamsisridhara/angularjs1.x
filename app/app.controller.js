
(function () {
  'use strict';
  var ctrlApp = angular.module('phCtrl', ['phService']);
  ctrlApp.controller('phoneListController', ['phoneservicefactory', phCtrlFunction]);
  function phCtrlFunction(phoneservicefactory) {
    var vm = this;
    vm.employees = [];
    vm.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
    // defining the function
    vm.loadFiles = function () {
      vm.employees = [];
      getEmplListService();
    };
    function getEmplListService() {
      // invoking a service
      phoneservicefactory.getsourceFile1().then(function (data) {
        vm.employees = data;
        // console.log(data);
      }, function (err) {

      });
    }
    vm.criteriaMatch = function (criteria) {
      return function (item) {
        return item.id <= '6447';
      };
    };
    vm.loadFiles();// calling a function
  }
}());
