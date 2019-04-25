
(function () {
  'use strict';
  var phonecatApp = angular.module('phService',[]);
  phonecatApp.factory('phoneservicefactory', ['$http', '$q', phoneServicefunction]);
  function phoneServicefunction($http, $q) {
    var service = {
      getsourceFile1: getsourceFile1
    };
    return service;
    function getsourceFile1() {
      var defer = $q.defer();
      $http.get('http://dummy.restapiexample.com/api/v1/employees')
          .then(function (response) {
              if(response && response.data) {
                defer.resolve(response.data);
              }
          }, function (err) {
              defer.reject('error in loading source json');
          });
      return defer.promise;
    }
  }
}());