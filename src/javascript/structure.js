// import

import Chart from 'chart.js/auto';

// Canvas for Chart
const chartCanvas = document.querySelector("#chart");

// Creating Chart
const chart = new Chart(chartCanvas, {
    type: "bar",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
})