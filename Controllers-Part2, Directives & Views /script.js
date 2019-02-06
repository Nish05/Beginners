// Code goes here
(function() {
  var app = angular.module("githubViewer", []);

  var MainController = function($scope, $http) {
    var onError = function(response) {
      $scope.error = "Could not fetch the user"
    };

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };
    
    $scope.search = function(username){
          $http.get("https://api.github.com/users/"+username)
              .then(onUserComplete, onError);
    };

    $scope.message = "Github Viewer";
    $scope.username = "angular";

  };
  app.controller("MainController", MainController);
}());