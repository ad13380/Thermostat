describe("Thermostat", function () {
  var temp;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should return a starting temperature of 20", function() {
    expect(thermostat.temp()).toEqual(20)
  });
});