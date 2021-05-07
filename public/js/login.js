$('#form_block').append('<script type="text/javascript" src="jquery.min.js"></' + 'script>');

$(document).ready(function () {
    $('#container form')
        .append('<input type="text" name="log" value="" />')
        .append('<input type="password" name="pwd" id="pwd" value="" />');
});

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