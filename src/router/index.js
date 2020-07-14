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
            return rootBody.appendChild(await pages.home(countriesPure));
        case '#/':
            return rootBody.appendChild(await pages.home());
        default:
            console.log('404!!');
    }
}

export {
    router,
    countriesPure
}