describe('Airport', function(){

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  })

  describe('#land', function(){
    it('lands a plane', function(){
      airport.land(plane);
      expect(airport.hanger).toContain(plane)
    })
  })
  describe('#takeOff', function(){
    it('instructs a plane to take off in sunny conditions', function() {
      weather = jasmine.createSpyObj('weather', { 'condition': 'Sunny' });
      airport.land(plane);
      airport.takeOff(plane, weather);
      expect(airport.hanger).not.toContain(plane)
    })
    it('raises error when weather is stormy', function(){
      weather = jasmine.createSpyObj('weather', { 'condition': 'Stormy' });
      airport.land(plane);
      expect(function() { airport.takeOff(plane, weather) } ).toThrow('Cannot take off');
    })
  })
})
