class Thermostat {
  constructor() {
    this.temp = 20;
    this.psm = true;
  }

  raise(value) {
    this.temp += value;
  }

  lower(value) {
    if (this._tempLowerLimit(value) === true) {
  
      return (this.temp -= value);
    }
    else {
      return 'Hello';
    }
  }

  switchPsm() {
    return this.psm = !this.psm;
  }

  maxTemp() {
    if (this.psm) {
      return 25;
    } else {
      return 32;
    }
  }

  _tempLowerLimit(value) {
    if (this.temp - value >= 10) {
      return true;
    } else {
      return false;
    }
  }
}

let thermostat = new Thermostat();
// thermostat.lower(10);
console.log(thermostat.temp);
