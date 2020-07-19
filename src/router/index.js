import {
    pages
} from "../controller/index";
import {
    fetchData
} from "../model/homeModel";

var countriesPure;

const divTitle = document.getElementById('divTitle');
const divContent = document.getElementById('divContent');
const divcbxChooseCountry = document.getElementById('divcbxChooseCountry');
const divSearchBar = document.getElementById('divSearchBar');
const divSelectedCountry = document.getElementById('divSelectedCountry');
const divWorldWide = document.getElementById('divWorldWide');

const router = async (route) => {

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
            divcbxChooseCountry.appendChild(await pages.cbxChooseCountry());
            break;
        case '#/':
            divcbxChooseCountry.appendChild(await pages.cbxChooseCountry());
            break;
        case '#/#':
            divcbxChooseCountry.appendChild(await pages.cbxChooseCountry());
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
        default:
            console.log('404!!');
    }
}

export {
    router,
    countriesPure
}