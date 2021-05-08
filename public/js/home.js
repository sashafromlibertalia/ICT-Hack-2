$('.dropdown-trigger').dropdown({
    'closeOnClick': true
})
let Time = new Date()

function greeting() {
    for (j = 0; j < 6; j++) {
        if (Time.getHours() === j) {
            $('#header-message').text('Доброй ночи, Ева!')
        }
    }
    for (j = 6; j < 12; j++) {
        if (Time.getHours() === j) {
            $('#header-message').text('Доброе утро, Ева!')
        }
    }
    for (j = 12; j < 18; j++) {
        if (Time.getHours() === j) {
            $('#header-message').text('Добрый день, Ева!')
        }
    }
    for (j = 18; j < 24; j++) {
        if (Time.getHours() === j) {
            $('#header-message').text('Добрый вечер, Ева!')
        }
    }
}

$(document).ready(() => {
    greeting()
})