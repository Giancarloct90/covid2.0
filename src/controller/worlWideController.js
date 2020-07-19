import view from "../views/worlWide.html";
import {
    getDataCovid
} from "../model/woldWideModel";


export default async () => {
    let div = document.createElement('div');
    div.innerHTML = view;
    let fet = await getDataCovid();
    let totalconfirmed = div.querySelector('#totalconfirmed');
    let totalrecovered = div.querySelector('#totalrecovered');
    let totaldeaths = div.querySelector('#totaldeaths');
    // console.log(fet.confirmed);
    // console.log(fet.recovered);
    // console.log(fet.deaths);
    totalconfirmed.innerHTML = fet.confirmed;
    totalrecovered.innerHTML = fet.recovered;
    totaldeaths.innerHTML = fet.deaths;
    return div;
}