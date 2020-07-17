import view from "../views/cbxChooseCountry.html";
import {
    fetchData
} from "../model/homeModel";
import {
    home
} from "./homeController";
import view2 from "../views/countrySelected.html";
import {
    numberWithCommas
} from "../utils/utils";

var flag;
if (window.localStorage.getItem('country')) {
    flag = true;
    // console.log(window.localStorage.getItem('country'));
} else {
    flag = false;
}

export default async () => {
    let countrySelected;
    let div = document.createElement('div');
    div.innerHTML = view;

    // FILL DA COMBOBOX
    let cbxCountries = div.querySelector('#cbxCountries');
    await fillCbx(div);

    // if (flag) {
    //     countrySelected = window.localStorage.getItem('country');
    // } else {}
    // CHANGE THE COUNTRY 
    cbxCountries.addEventListener('change', async () => {

        let countryToSearch = cbxCountries.options[cbxCountries.selectedIndex].text;
        let countries = await fetchData();
        countrySelected = countries.data.filter(country => country.name == countryToSearch);
        window.localStorage.setItem('country', JSON.stringify(countrySelected[0]));



        const divSelectedCountry = document.getElementById('divSelectedCountry')
        let div2 = document.createElement('div');
        div2.innerHTML = view2;
        const card1 = div2.querySelector('#card1');
        let html = '';
        html += `<div class="card-header  border-dark headCards">${countrySelected[0].name}</div>`;
        html += `<div class="card-body text-dark">`;
        html += `<span id="lblComfirmed">Comfirmed: ${numberWithCommas(countrySelected[0].latest_data.confirmed)}</span><br>`
        html += `<span id="lblRecovered">Recovered: ${numberWithCommas(countrySelected[0].latest_data.recovered)}</span><br>`
        html += `<span id="lblDeaths">Deaths: ${numberWithCommas(countrySelected[0].latest_data.deaths)}</span><br>`
        html += `<span id="lblComfirmed">Actives: ${numberWithCommas(parseFloat(countrySelected[0].latest_data.confirmed)-parseFloat(countrySelected[0].latest_data.recovered))}</span><br>`
        if (countrySelected[0].latest_data.calculated.death_rate) {
            html += `<span id="lblComfirmed">Death Rate: ${countrySelected[0].latest_data.calculated.death_rate.toFixed(2)} %</span>`
        }
        html += `</div>`;
        html += `<div class="card-footer bg-transparent border-dark">Footer</div>`;
        card1.innerHTML = html;
        divSelectedCountry.appendChild(div2);
        modalBg.style.display = 'none';
        // modalBg.remove();

    });

    // ADD FUNCTION TO CLOSE MODAL
    let modalClose = div.querySelector('#modalClose');
    let modalBg = div.querySelector('#modalBg');
    modalClose.addEventListener('click', () => {
        modalBg.classList.add('hideModal');
    });
    return div;
}

const getCountryNames = async () => {
    let countriesName = [];
    let countries = await fetchData();
    countries.data.map(country => {
        countriesName.push(country.name);
    });
    return countriesName;
}

const fillCbx = async (div) => {

    let countriesNames = await getCountryNames();
    for (let i = 0; i <= countriesNames.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = countriesNames[i];
        option.value = countriesNames[i];
        div.querySelector('#cbxCountries').appendChild(option);
    }
}