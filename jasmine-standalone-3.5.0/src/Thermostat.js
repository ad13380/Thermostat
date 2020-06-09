const defaultVal = 20


class Thermostat {
  constructor() {
    this.temp = 20;
    this.psm = true;
  }

  reset() {
    this.temp = defaultVal;
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

  currentUsage() {
    if (this.temp < 18) { 
      return 'low-usage'; 
    }
    else if (this.temp < 25) {
      return 'medium-usage';
    }
    else {
      return 'high-usage';
    }
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

  _tempUpperLimit(value) {
    if (this.temp + value >= this.maxTemp) {
      return true;
    } else {
      return false;
    }
  }
}

let thermostat = new Thermostat();
// thermostat.lower(10);
console.log(defaultVal);
