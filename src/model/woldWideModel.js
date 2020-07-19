import {
    numberWithCommas
} from "../utils/utils";

const getDataCovid = async () => {
    let data = await fetch('https://corona-api.com/timeline');
    let info = await data.json();
    return {
        confirmed: numberWithCommas(info.data[0].confirmed),
        deaths: numberWithCommas(info.data[0].deaths),
        recovered: numberWithCommas(info.data[0].recovered)
    }
}

export {
    getDataCovid
}