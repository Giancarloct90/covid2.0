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
// const divTitle = document.getElementById('divTitle');

const router = async (route) => {
    divContent.innerHTML = '';
    console.log(route);
    countriesPure = await fetchData();
    switch (route) {
        case '':
            divcbxChooseCountry.appendChild(await pages.cbxChooseCountry());
            divTitle.appendChild(await pages.title());
            divSearchBar.appendChild(await pages.input());
            divContent.appendChild(await pages.home(countriesPure, false));
            break;
        case '#/':
            divTitle.appendChild(await pages.input());
            divContent.appendChild(await pages.home(countriesPure, false));
            break;
        default:
            console.log('404!!');
    }
}

export {
    router,
    countriesPure
}