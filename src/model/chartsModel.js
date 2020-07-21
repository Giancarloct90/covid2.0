const getDataForCharts = async () => {
    let data = await fetch('https://pomber.github.io/covid19/timeseries.json');
    let info = await data.json();
    return info;
};

const getCountriesForCharts = async () => {
    let countriesFinal = [];
    let countries = await getDataForCharts();
    Object.entries(countries).forEach(([key, value]) => {
        countriesFinal.push(key);
    });
    return countriesFinal;
}

export {
    getCountriesForCharts,
    getDataForCharts
}