
angular.module('eb')

  .factory('Season', [
    '$q',
    '$http',
    function ($q, $http) {

    return {

      find: function (year, name) {

        var deferred = $q.defer();

        $http
          .get('http://localhost:8010/season/' + year + '/' + name)
          .success(function (data) {

            return deferred.resolve(data);

        });

        return deferred.promise;

      }

    };

  }

]);
