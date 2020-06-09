class Thermostat {
  constructor() {
    this.temp = 20;
  }

  viewTemp() {
    return this.temp;
  }

  raise(value) {
    this.temp += value;
  }

  lower(val) {
    if (_tempLowerLimit(val)) {
      return this.temp - val;
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