import view from "../views/cbxChooseCountry.html";
import {
    fetchData
} from "../model/homeModel";

export default async () => {
    //VAR
    let countrySelected;
    let div = document.createElement('div');
    div.innerHTML = view;
    let modalBg = div.querySelector('#modalBg');

    // FILL DA COMBOBOX
    let cbxCountries = div.querySelector('#cbxCountries');
    await fillCbx(div);

    // CHANGE THE COUNTRY 
    cbxCountries.addEventListener('change', async () => {

        let countryToSearch = cbxCountries.options[cbxCountries.selectedIndex].text;
        let countries = await fetchData();
        countrySelected = countries.data.filter(country => country.name == countryToSearch);
        window.sessionStorage.setItem('country', JSON.stringify(countrySelected[0]));

        window.location.hash = '#/home';
        modalBg.remove();

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