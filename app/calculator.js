const emissionList = require('./data');

class CoCalculator {
    constructor(cmd) {
        this.vehicle = cmd['transportation-method'];
        this.distance = cmd['distance'];
        this.distUnit = cmd['unit-of-distance'];
        this.outputUnit = cmd['output'];
    }

    roundValue = n => Math.round(n * 10) / 10;

    getResult = rate => {
        let outputval = this.distUnit === 'Km' ?
            this.outputUnit === 'Kg' ?
            (this.roundValue(this.distance * (rate / 1000)) + 'Kg') :
            (this.roundValue(this.distance * rate) + 'g') :
            this.outputUnit === 'Kg' ?
            (this.roundValue(this.distance * (rate / 1000000)) + 'Kg') :
            (this.roundValue(this.distance * (rate / 1000)) + 'g')
        let result = `Your trip caused ${outputval} of CO2-equivalent.`
        return result;
    }

    fetchRate(data, vehicle) {
        return new Promise((resolve) => {

            let found = false;
            let recursion = 0;
            
            const searchKeyvalue = (obj, key) => {
                recursion += 1;
                for (let prop in obj) {
                    if (found) break;
                    if (typeof (obj[prop]) == "object") {
                        searchKeyvalue(obj[prop], key);
                    } else {
                        if (prop == key) {
                            found = true;
                            resolve(obj[key])
                        }
                    }
                }
                recursion -= 1;
                if (recursion === 0 && !found) {
                    console.log('The vehicle not found in data list')
                }
            }

            searchKeyvalue(data, vehicle);
        });
    }

    async calculate() {
        let data = emissionList.data;
        let rate = await this.fetchRate(data, this.vehicle);
        let result = this.getResult(rate);
        return result;
    }
}

module.exports = CoCalculator;