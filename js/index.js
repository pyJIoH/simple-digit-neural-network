/**
 * Created by asaybel on 18.01.2016.
 */

$(document).ready(function () {
    $('.cell').click(function () {
        var color = $(this).css('background-color') == 'rgb(0, 0, 0)' ? 'white' : 'black';
        $(this).css('background-color', color);
    });

    $('#analyze').click(function () {
        var data = [];
        $('.cell').each(function (index, value) {
            var i = $(this).css('background-color') == 'rgb(0, 0, 0)' ? 1 : 0;
            data.push(i);
        });
        var data = $.getJSON('data/data.json', function (data) {
            var items = [];
            $.each(data, function (key, val) {
                //console.log(key + ' ' + val);
            });
        });
        var network = new netjs.Network();
        console.log(network);
    });
});

