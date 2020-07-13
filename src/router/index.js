import {
    pages
} from "../controller/index";

const rootBody = document.getElementById('root');

const router = (route) => {
    rootBody.innerHTML = '';
    console.log(route);
    switch (route) {
        case '':
            window.location.hash('fuck');
            return rootBody.appendChild(pages.home());
        case '#/':
            return rootBody.appendChild(pages.home());
        default:
            console.log('404!!');
    }
}

export {
    router
}