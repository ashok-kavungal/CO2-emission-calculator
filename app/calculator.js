const data = require('./data');

class CoCalculator {
  constructor(cmd) {
    this.vehicle = cmd['transportation-method'];
    this.distance = cmd['distance'];
    this.distUnit = cmd['unit-of-distance'];
    this.outputUnit = cmd['output'];
  }

  roundValue = (n) => Math.round(n * 10) / 10;

  getResult = (rate) => {
    //use the fetched rate and calculates the final emission value
    // returns the final string as result
    let outputval =
      this.distUnit === 'km'
        ? this.outputUnit === 'kg'
          ? this.roundValue(this.distance * (rate / 1000)) + 'kg'
          : this.roundValue(this.distance * rate) + 'g'
        : this.outputUnit === 'kg'
        ? this.roundValue(this.distance * (rate / 1000000)) + 'kg'
        : this.roundValue(this.distance * (rate / 1000)) + 'g';
    const result = `Your trip caused ${outputval} of CO2-equivalent.`;
    return result;
  };

  fetchRate(data, vehicle) {
    //using promise to show real-life scenario (like a database)
    return new Promise((resolve, reject) => {
      function getKeyval(Obj, key) {
        let result = null;
        for (var prop in Obj) {
          if (prop == key) {
            resolve(Obj[prop]);
          }
          if (Obj[prop] instanceof Object) {
            result = getKeyval(Obj[prop], key);
            if (result) {
              break;
            }
          }
        }
        return result;
      }
      getKeyval(data, vehicle);
      reject('The vehicle not found in data list.');
    });
  }

  async calculate() {
    const rate = await this.fetchRate(data, this.vehicle);
    const result = this.getResult(rate);
    return result;
  }
}

module.exports = CoCalculator;
