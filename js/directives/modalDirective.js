app.directive('modalDirective', function () {
  return {
  	restrict: "E",
  	templateUrl: "partials/teamDetails.html",
  	controller: "TeamsDetailCtrl",
  	controllerAs: "teamsCtrl"

  };
});
