const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const getFecha = (date23) => {
    const date = new Date().getTime();
    return new Intl.DateTimeFormat('es-HN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }).format(date23);
}

export {
    numberWithCommas,
    getFecha
}