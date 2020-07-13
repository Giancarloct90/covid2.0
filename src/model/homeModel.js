export class Covid {
    constructor() {
        this.data = this.fetchData();
    }

    async fetchData() {
        try {
            let info = await fetch('https://corona-api.com/countries');
            let data = await info.json();
            return data;
        } catch (e) {
            console.log('Error trying to get api data');
            throw new Error();
        }
    }

    getData() {
        return this.data;
    }

}