import view from "../views/cbxChooseCountry.html";
import {
    fetchData
} from "../model/homeModel";

export default async () => {
    let div = document.createElement('div');
    div.innerHTML = view;

    // FILL DA COMBOBOX
    let cbxCountries = div.querySelector('#cbxCountries');
    let countriesNames = await getCountryNames();
    for (let i = 0; i <= countriesNames.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = countriesNames[i];
        option.value = countriesNames[i];
        cbxCountries.appendChild(option);
    }

    // CHANGE THE COUNTRY 
    cbxCountries.addEventListener('change', async () => {
        let countryToSearch = cbxCountries.options[cbxCountries.selectedIndex].text;
        let countries = await fetchData();
        let countrySelected = countries.data.filter(country => country.name == countryToSearch);
        console.log(countrySelected);
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