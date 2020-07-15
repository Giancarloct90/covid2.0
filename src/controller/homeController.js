import view from "../views/home.html";
import {
    numberWithCommas
} from "../utils/utils";

const findcountry = () => {
    console.log('yaya');
}


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
    console.log(countriesFinal);
    countriesFinal.map(country => {
        html = '';
        let divCards = document.createElement('div');
        divCards.classList.add('card', 'border-dark', 'mb-3');
        divCards.style.maxWidth = '18rem';
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
        html += `<div class="card-footer bg-transparent border-dark">Footer</div>`;
        divCards.innerHTML = html;
        divCardCountry.appendChild(divCards);
    });


    return div;
}

const Render = () => {

}

export {
    home
}