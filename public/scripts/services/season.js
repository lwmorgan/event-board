
angular.module('eb')

  .factory('Season', [
    '$q',
    '$http',
    function ($q, $http) {

    return {

    find: function (year, name) {

      var deferred = $q.defer();

      console.log('In Service about to make API call.');

      $http
        .get('http://localhost:8010/season/' + year + '/' + name)
        .success(function (data) {

          console.log('In Service in callback from API call.', data);

          return deferred.resolve(data);

      });

      return deferred.promise;

    }

  };

}]);
