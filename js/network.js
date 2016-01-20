/**
 * Created by asaybel on 20.01.2016.
 */

var Network = function (options) {
    var options = options || {};

}

Network.prototype = {
    train: function (input) {
        //var sizes = _([inputSize, hiddenSizes, outputSize]).flatten();
        //this.initialize(sizes);
    },
    run: function (input) {
        //var sizes = _([inputSize, hiddenSizes, outputSize]).flatten();
        //this.initialize(sizes);
    }
}

var Neuron = function () {

}

Neuron.prototype = {
    init: function (sizes) {
        this.mul = [];
        this.weight = [];
        this.input = [];
        this.limit = 9;
    }
}
