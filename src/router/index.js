import {
    pages
} from "../controller/index";
import {
    fetchData
} from "../model/homeModel";
import {
    getCountriesForCharts
} from "../model/chartsModel";

var countriesPure;

const divTitle = document.getElementById('divTitle');
const divContent = document.getElementById('divContent');
const divcbxChooseCountry = document.getElementById('divcbxChooseCountry');
const divSearchBar = document.getElementById('divSearchBar');
const divSelectedCountry = document.getElementById('divSelectedCountry');
const divWorldWide = document.getElementById('divWorldWide');
const divCharts = document.getElementById('divCharts');

const router = async (route) => {
    divCharts.innerHTML = '';
    divTitle.innerHTML = '';
    divSelectedCountry.innerHTML = '';
    divWorldWide.innerHTML = '';
    divSearchBar.innerHTML = '';
    divContent.innerHTML = '';
    divcbxChooseCountry.innerHTML = '';
    // console.log(route);
    countriesPure = await fetchData();
    switch (route) {
        case '':
            renderCbxChooseCountry();
            break;
        case '#/':
            renderCbxChooseCountry();
            break;
        case '#/home': {
            if (window.sessionStorage.getItem('country')) {
                divTitle.appendChild(await pages.title());
                divSelectedCountry.appendChild(pages.countrySelected(JSON.parse(window.sessionStorage.getItem('country'))));
                divWorldWide.appendChild(await pages.worlWide());
                divSearchBar.appendChild(await pages.input());
                divContent.appendChild(await pages.home(countriesPure, false));
                break;
            } else {
                window.location.hash = '#/';
                break;
            }
        }
        case '#/charts':
            divTitle.appendChild(await pages.title());
            divcbxChooseCountry.appendChild(await pages.cbxChooseCountry(true, await getCountriesForCharts()));

            break;
        default:
            console.log('404!!');
    }
}

const renderCbxChooseCountry = async () => {
    divcbxChooseCountry.appendChild(await pages.cbxChooseCountry(false, null));

}

export {
    router,
    countriesPure
}