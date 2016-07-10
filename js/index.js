(function () {
    function getZero() {
        return [0, 0];
    }
    function getOne() {
        return [1, 1];
    }
    function getTwo() {
        return [2, 2];
    }
    function getThree() {
        return [3, 3];
    }
    function getFour() {
        return [4, 4];
    }
    function getFive() {
        return [5, 5];
    }
    function getSix() {
        return [6, 6];
    }
    function getSeven() {
        return [7, 7];
    }
    function getEight() {
        return [8, 8];
    }
    function getNine() {
        return [9, 9];
    }

    var app = angular.module('app', []).controller('ctrl',
        function ($scope) {
            const black = {'background-color':'black'};
            const white = {'background-color':'white'};
            var trainedNet = function() {
                var net = new brain.NeuralNetwork();
                net.train([{input: getZero(), output: {Zero: 1}},
                    {input: getOne(), output: {One: 1}},
                    {input: getTwo(), output: {Two: 1}},
                    {input: getThree(), output: {Three: 1}},
                    {input: getFour(), output: {Four: 1}},
                    {input: getFive(), output: {Five: 1}},
                    {input: getSix(), output: {Six: 1}},
                    {input: getSeven(), output: {Seven: 1}},
                    {input: getEight(), output: {Eight: 1}},
                    {input: getNine(), output: {Nine: 1}}]);
                return net;
            }();

            $scope.click = function (n, m) {
                $scope['cellStyle' + n + m] = JSON.stringify($scope['cellStyle' + n + m]) == (JSON.stringify(black)) ? white : black;
            };

            $scope.analyze = function () {
                console.log(trainedNet.run([2, 2]));
            };

            $scope.clear = function () {
                for (var n = 0; n < 5; n++)
                    for (var m = 0; m < 3; m++)
                        $scope['cellStyle' + n + m] = white;
            }
        });
})();


