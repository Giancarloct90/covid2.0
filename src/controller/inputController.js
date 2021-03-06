import view from "../views/inputTxtFindCountry.html";
import {
    fetchData
} from "../model/homeModel";

import {
    pages
} from "./index";


export default async () => {
    let div = document.createElement('div');
    div.innerHTML = view;
    let txtFindCountry = div.querySelector('#txtFindCountry');
    let countriesPure;
    countriesPure = await fetchData();
    txtFindCountry.addEventListener('keyup', async () => {
        const divContent = document.getElementById('divContent');
        divContent.innerHTML = ''
        divContent.appendChild(await pages.home(await searchCountry(countriesPure, txtFindCountry), true));
    })
    return div;
}

const searchCountry = async (arr, countryToSearch) => {
    let arrayNewCountries = arr.data.filter(country => {
        // console.log(country.name.toUpperCase());!==-1
        return country.name.toUpperCase().indexOf(countryToSearch.value.toUpperCase()) !== -1;
        // console.log(country.name.toUpperCase().indexOf(txtFindCountry.value.toUpperCase()));
    });
    return arrayNewCountries;
}