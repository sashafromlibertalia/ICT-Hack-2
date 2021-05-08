$('form input[type=submit]').submit((e) => {
    e.preventDefault()
    let form = $(this)
    $.ajax({
        type: "POST",
        dataType: 'json',
        data: form.serialize(),
        url: "/home",
        success: function (data) {
            console.log(data)
        }
    })
});