/**
 * Created by asaybel on 18.01.2016.
 */
$(document).ready(function () {
    $('.cell').click(function () {
        var color = $(this).css('background-color') == 'rgb(0, 0, 0)' ? 'white' : 'black';
        $(this).css('background-color', color);
    });
});