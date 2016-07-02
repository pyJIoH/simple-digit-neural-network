(function () {
    var app = angular.module('app', []).controller('ctrl',
        function ($scope) {
            const black = {'background-color':'black'};
            const white = {'background-color':'white'};
            $scope.click = function (n, m) {
                $scope['cellStyle' + n + m] = JSON.stringify($scope['cellStyle' + n + m]) == (JSON.stringify(black)) ? white : black;
            };

            $scope.analyze = function () {

            };

            $scope.clear = function () {
                for (var n = 0; n < 5; n++)
                    for (var m = 0; m < 3; m++)
                        $scope['cellStyle' + n + m] = white;
            }
        });
})();


