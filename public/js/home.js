$('.dropdown-trigger').dropdown({
    'closeOnClick': true
})

let ctx = document.getElementById('graph').getContext('2d')
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1 мая', '2 мая', '3 мая', '4 мая', '5 мая', '6 мая'],
        datasets: [{
            label: 'Соотношение выполненных задач по дням',
            data: [4, 7, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});