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
        //use the fetched rate and calculates the final emission value
        // returns the final string as result
        let outputval = this.distUnit === 'km' ?
            this.outputUnit === 'kg' ?
            (this.roundValue(this.distance * (rate / 1000)) + 'kg') :
            (this.roundValue(this.distance * rate) + 'g') :
            this.outputUnit === 'kg' ?
            (this.roundValue(this.distance * (rate / 1000000)) + 'kg') :
            (this.roundValue(this.distance * (rate / 1000)) + 'g')
        const result = `Your trip caused ${outputval} of CO2-equivalent.`
        return result;
    }

    fetchRate(data, vehicle) {
        //search the nested object using an recursive fn
        //resolves the emission value in gram per km if vehicle is found in list
        //rejects if the transportation method is not found in data list
        return new Promise((resolve,reject) => {

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
                    reject('The vehicle not found in data list.');
                }
            }
            searchKeyvalue(data, vehicle);
        });
    }

    async calculate() {
        const data = emissionList.data;
        const rate = await this.fetchRate(data, this.vehicle);
        const result = this.getResult(rate);
        return result;
    }
}

module.exports = CoCalculator;