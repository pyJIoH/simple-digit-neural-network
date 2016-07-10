(function () {
    function getZero() {
        return [1,1,1,1,0,1,1,0,1,1,0,1,1,1,1];
    }
    function getOne() {
        return [0,1,0,1,1,0,0,1,0,0,1,0,0,1,0];
    }
    function getTwo() {
        return [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1];
    }
    function getThree() {
        return [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1];
    }
    function getFour() {
        return [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1];
    }
    function getFive() {
        return [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1];
    }
    function getSix() {
        return [1,1,1,1,0,0,1,1,1,1,0,1,1,1,1];
    }
    function getSeven() {
        return [1,1,1,0,0,1,0,0,1,0,0,1,0,0,1];
    }
    function getEight() {
        return [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1];
    }
    function getNine() {
        return [1,1,1,1,0,1,1,1,1,0,0,1,1,1,1];
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
                var input = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                for (var n = 0; n < 5; n++)
                    for (var m = 0; m < 3; m++)
                        input[m + n*3] = JSON.stringify($scope['cellStyle' + n + m]) == (JSON.stringify(black)) ? 1 : 0;
                console.log(trainedNet.run(input));
            };

            $scope.clear = function () {
                for (var n = 0; n < 5; n++)
                    for (var m = 0; m < 3; m++)
                        $scope['cellStyle' + n + m] = white;
            }
        });
})();


