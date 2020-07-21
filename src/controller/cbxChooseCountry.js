import view from "../views/cbxChooseCountry.html";
import {
    fetchData
} from "../model/homeModel";
import {
    renderChart
} from "./chartsController";

export default async (flag, data) => {
    //VAR
    let countrySelected;
    let countriesNames
    let div = document.createElement('div');
    div.innerHTML = view;
    let modalBg = div.querySelector('#modalBg');
    let modalChild = div.querySelector('#modalChild');
    let titleCbxCountry = div.querySelector('#titleCbxCountry');
    if (flag) {
        titleCbxCountry.classList.remove('titleModal');
        titleCbxCountry.classList.add('titleCbxCountry');
        titleCbxCountry.innerHTML = "Select a Country";
        modalBg.classList.remove('modal-bg');
        modalChild.classList.remove('modal-child');
        modalChild.classList.add('text-center');
        div.classList.add('container');
        modalBg.classList.add('row');
        modalChild.classList.add('col-md-6', 'mx-auto');
        countriesNames = data
    } else {

        countriesNames = await getCountryNames();
    }

    // FILL DA COMBOBOX
    let cbxCountries = div.querySelector('#cbxCountries');
    await fillCbx(div, countriesNames);

    // CHANGE THE COUNTRY 
    cbxCountries.addEventListener('change', async () => {

        let countryToSearch = cbxCountries.options[cbxCountries.selectedIndex].text;
        let countries = await fetchData();
        countrySelected = countries.data.filter(country => country.name == countryToSearch);

        if (flag) {
            // renderCharts();
            const divCharts = document.getElementById('divCharts');
            divCharts.innerHTML = ''
            divCharts.appendChild(await renderChart(countryToSearch));
        } else {
            window.sessionStorage.setItem('country', JSON.stringify(countrySelected[0]));
            window.location.hash = '#/home';
            modalBg.remove();
        }

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

const fillCbx = async (div, countriesNames) => {


    for (let i = 0; i <= countriesNames.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = countriesNames[i];
        option.value = countriesNames[i];
        div.querySelector('#cbxCountries').appendChild(option);
    }
}