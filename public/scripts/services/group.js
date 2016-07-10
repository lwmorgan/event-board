
angular.module('eb')

  .factory('Group', [
    '$q',
    '$http',
    function ($q, $http) {

    return {

    findByName: function (name) {

      var deferred = $q.defer();

      $http
        .get('http://localhost:8010/group/' + name)
        .success(function (data) {

          return deferred.resolve(data);

      });

      return deferred.promise;

    }

  };

}]);
