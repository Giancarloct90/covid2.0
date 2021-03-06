import view from "../views/home.html";
import {
    numberWithCommas,
    getFecha
} from "../utils/utils";

const home = async (countriesPure, flag) => {
    if (flag) {
        var countriesFinal = countriesPure;
    } else {
        var countriesFinal = countriesPure.data;
    }
    const div = document.createElement('div');
    div.innerHTML = view;

    let html = '';
    const divCardCountry = div.querySelector('#divCardCountry');
    countriesFinal.map(country => {
        html = '';
        let divCards = document.createElement('div');
        divCards.classList.add('card', 'border-dark', 'mb-3');
        html += `<div class="card-header  border-dark headCards">${country.name}</div>`;
        html += `<div class="card-body text-dark">`;
        html += `<span id="lblComfirmed">Comfirmed: ${numberWithCommas(country.latest_data.confirmed)}</span><br>`
        html += `<span id="lblRecovered">Recovered: ${numberWithCommas(country.latest_data.recovered)}</span><br>`
        html += `<span id="lblDeaths">Deaths: ${numberWithCommas(country.latest_data.deaths)}</span><br>`
        html += `<span id="lblComfirmed">Actives: ${numberWithCommas(parseFloat(country.latest_data.confirmed)-parseFloat(country.latest_data.recovered))}</span><br>`
        if (country.latest_data.calculated.death_rate) {
            html += `<span id="lblComfirmed">Death Rate: ${country.latest_data.calculated.death_rate.toFixed(2)} %</span>`
        }
        html += `</div>`;
        // getFecha(country.updated_at)

        html += `<div class="card-footer bg-transparent border-dark">${getFecha(new Date(country.updated_at))}</div>`;
        divCards.innerHTML = html;
        divCardCountry.appendChild(divCards);
    });
    return div;
}

const countrySelected = async (country) => {
    let div = document.createElement('div');
    div.innerHTML = div;

}

export {
    home
}