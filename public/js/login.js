$(document).ready(function () {
    $('button').click(function () {
        $.ajax({
            type: "POST",
            url: "/bz2.html"
        }).success(function (data) {
            let $bz = $('#z input[name="log"]').detach().css('background-color', 'red');
            let $bz2 = $('#z input[name="pwd"]').detach().css('background-color', 'red');
            $('#z').empty().html(data)
            $('#z input[name="log"]').replaceWith($bz);
            $('#z input[name="pwd"]').replaceWith($bz2);
        });
    });
});