/**
 * Created by sergiiivanchenko on 06/06/2017.
 */

myApp.controller ('mainCtrl', mainCtrl);

mainCtrl.$inject = ['$scope'];
function mainCtrl($scope) {
    $scope.text = "";

    $scope.addText = function () {
        $scope.text2=$scope.text;
    }

}