(function () {
    var app = angular.module('app', []).controller('ctrl',
        function ($scope) {
            $scope.click = function (n, m) {
                const black = {'background-color':'black'};
                const white = {'background-color':'white'};
                $scope['cellStyle' + n + m] = JSON.stringify($scope['cellStyle' + n + m]) == (JSON.stringify(black)) ? white : black;
            }

            $scope.analyze = function () {

            }
        });
})()


