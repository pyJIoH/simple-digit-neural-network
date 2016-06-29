(function () {
    var app = angular.module('app', []).controller('ctrl',
        function ($scope) {
            $scope.cellStyle = {'background-color':'white'};
            $scope.click = function (n, m) {
                $scope.cellStyle = {'background-color':'black'};
            }

            $scope.analyze = function () {

            }
        });
})()


