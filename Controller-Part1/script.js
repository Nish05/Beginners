// Code goes here

var MainController = function($scope){
  var person ={
    firstName:"Mickey",
    lastName: "Mouse",
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"
  }; 
  $scope.message="Hello!";
  $scope.person = person;
}; 