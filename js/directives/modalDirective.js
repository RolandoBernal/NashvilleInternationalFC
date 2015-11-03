app.directive('modalDirective', function () {
  // console.log("This is the TeamsCtrl");
  return {
  	restrict: "E",
  	templateUrl: "partials/teamDetails.html",
  	controller: "TeamsDetailCtrl",
  	controllerAs: "teamsCtrl"

  };
});
