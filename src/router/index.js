import {
    pages
} from "../controller/index";
import {
    fetchData
} from "../model/homeModel";
var countriesPure;

const rootBody = document.getElementById('root');

const router = async (route) => {
    rootBody.innerHTML = '';
    console.log(route);
    countriesPure = await fetchData();
    switch (route) {
        case '':
            rootBody.appendChild(await pages.input());
            rootBody.appendChild(await pages.home(countriesPure, false));
            break;
        case '#/':
            rootBody.appendChild(await pages.input());
            rootBody.appendChild(await pages.home(countriesPure, false));
            break;
        default:
            console.log('404!!');
    }
}

export {
    router,
    countriesPure
}