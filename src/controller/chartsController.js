import view from "../views/charts.html";
import Chart from "chart.js";
import {
    getDataForCharts,
    getCountriesForCharts
} from "../model/chartsModel";
import {
    numberWithCommas
} from "../utils/utils";

const renderChart = async (countryToSearch) => {
    let days = [],
        comfirmed = [],
        deaths = [],
        recovered = [];
    let div = document.createElement('div');
    div.innerHTML = view;
    let titleCharts = div.querySelector('#titleCharts');
    titleCharts.innerHTML = countryToSearch;
    const ctx = div.querySelector('#myChart');
    // console.log(countryToSearch);
    let countriesArray = Object.entries(await getDataForCharts());

    let countryF = countriesArray.filter(countryF => countryF[0] == countryToSearch)[0][1];
    countryF.map(country => {
        if (country.confirmed) {
            days.push(country.date);
            comfirmed.push(country.confirmed);
            recovered.push(country.recovered);
            deaths.push(country.deaths);
        }
    });
    // console.log(countryF);
    var mychart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: '# of Comfiermed',
                data: comfirmed,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: '# of Recovered',
                data: recovered,
                fill: false,
                backgroundColor: 'rgba(31, 189, 49, 1)',
                borderColor: 'rgba(31, 189, 49, 1)',
                borderWidth: 1
            }, {
                label: '# of Deaths',
                data: deaths,
                fill: false,
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return numberWithCommas(value);
                        }
                    }
                }]
            }
        }
    });
    return div;
}

export {
    renderChart
}