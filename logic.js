$scope.resetDashboard = function() {
    //make field valid so that that gets filled into the ng-model & we can clear it.
    $scope.DashboardForm.title.$setValidity('minlength', false)
    $scope.DashboardForm.description.$setValidity('minlength', false)
    $scope.dashboard.title = '';
    $scope.dashboard.description = '';
}
$(window).on('scroll', function() {
  $("#realcontent").css("left", -$(window).scrollTop());
});
