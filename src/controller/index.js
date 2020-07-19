import {
    home
} from "./homeController";
import input from "./inputController";
import cbxChooseCountry from "./cbxChooseCountry";
import title from "./title";
import worlWide from "./worlWideController";
import countrySelected from "./countrySelectedController";

const pages = {
    home: home,
    input: input,
    cbxChooseCountry: cbxChooseCountry,
    title: title,
    worlWide: worlWide,
    countrySelected: countrySelected
}

export {
    pages
}