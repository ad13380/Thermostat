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

  it("should have the ability to turn psm off", function() {
    thermostat.switchPsm()
    expect(thermostat.psm).toEqual(false)
  });

  it("should have a maximum temperature of 25 when psm is on", function() {
    expect(thermostat.maxTemp()).toEqual(25)
  });

  it("should have a maximum temperature of 32 when psm is off", function() {
    thermostat.psm = false;
    expect(thermostat.maxTemp()).toEqual(32)
  });

  it("should return 'low-usage' if temperature is below 18", function() {
    thermostat.lower(3)
    expect(thermostat.currentUsage()).toEqual('low-usage')
  });

  it("should return 'medium-usage' if temperature is below 25 but above 18", function() {
    expect(thermostat.currentUsage()).toEqual('medium-usage')
  });

  it("should return 'high-usage' if temperature is above 25", function() {
    thermostat.raise(5)
    expect(thermostat.currentUsage()).toEqual('high-usage')
  });

  it("should have the ability to be reset", function() {
    thermostat.raise(7)
    thermostat.reset()
    expect(thermostat.temp).toEqual(20)
  });
});