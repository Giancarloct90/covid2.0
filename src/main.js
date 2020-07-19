import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './main.css';
import {
    router
} from "./router/index";



router(window.location.hash);
window.addEventListener('hashchange', () => {
    router(window.location.hash);
});