import view from "../views/countrySelected.html";
import {
    numberWithCommas,
    getFecha
} from "../utils/utils";

export default (countrySelected) => {
    // console.log(countrySelected);
    // VAR/INIT/SELECTORS
    let div = document.createElement('div');
    div.innerHTML = view;
    const card1 = div.querySelector('#card1');

    // Render A COUNTRY
    let html = '';
    html += `<div class="card-header  border-dark headCards">${countrySelected.name}</div>`;
    html += `<div class="card-body text-dark">`;
    html += `<span id="lblComfirmed">Comfirmed: ${numberWithCommas(countrySelected.latest_data.confirmed)}</span><br>`
    html += `<span id="lblRecovered">Recovered: ${numberWithCommas(countrySelected.latest_data.recovered)}</span><br>`
    html += `<span id="lblDeaths">Deaths: ${numberWithCommas(countrySelected.latest_data.deaths)}</span><br>`
    html += `<span id="lblComfirmed">Actives: ${numberWithCommas(parseFloat(countrySelected.latest_data.confirmed)-parseFloat(countrySelected.latest_data.recovered))}</span><br>`
    if (countrySelected.latest_data.calculated.death_rate) {
        html += `<span id="lblComfirmed">Death Rate: ${countrySelected.latest_data.calculated.death_rate.toFixed(2)} %</span>`
    }
    html += `</div>`;
    html += `<div class="card-footer bg-transparent border-dark">${getFecha(new Date(countrySelected.updated_at))}</div>`;

    card1.innerHTML = html;
    return div;
}