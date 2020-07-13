import {
    pages
} from "../controller/index";

const rootBody = document.getElementById('root');

const router = async (route) => {
    rootBody.innerHTML = '';
    console.log(route);
    switch (route) {
        case '':
            return rootBody.appendChild(await pages.home());
        case '#/':
            return rootBody.appendChild(await pages.home());
        default:
            console.log('404!!');
    }
}

export {
    router
}