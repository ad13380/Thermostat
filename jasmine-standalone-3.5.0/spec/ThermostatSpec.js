describe("Thermostat", function () {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should return a starting temperature of 20", function() {
    expect(thermostat.temp).toEqual(20)
  });

  it("should increase the temperature by a given value", function() {
    thermostat.raise(10)
    expect(thermostat.temp).toEqual(30)
  });

  it("should decrease the temperature by a given value", function() {
    thermostat.lower(10)
    expect(thermostat.temp).toEqual(10)
  });

  it("should default to power saving mode", function() {
    expect(thermostat.psm).toEqual(true)
  });
});