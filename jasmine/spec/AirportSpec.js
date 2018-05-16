describe('Airport', function(){

  it('returns maximum capacity for hanger', function(){
    expect(CAPACITY).toEqual(5);
  })
// debugger;
  var airport

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  })

  describe('#isFull', function() {
    it('returns false when airport is empty', function(){
      expect(airport.isFull()).toEqual(false)
    })
  })

  describe('#land', function(){
    it('lands a plane only in sunny conditions', function(){
      weather = jasmine.createSpyObj('weather', {'condition': 'Sunny'});
      airport.land(plane, weather);
      expect(airport.hangar).toContain(plane)
    });

    it('raises error when weather is stormy', function(){
      // spyOn(weather, 'condition').and.returnValue('Stormy');
      weather = jasmine.createSpyObj('weather', { 'condition': 'Stormy' });
      expect(function() {airport.land(plane, weather) } ).toThrow('Cannot land');
    });


  })
  describe('#takeOff', function(){

    beforeEach(function(){
      weather = jasmine.createSpyObj('weather', { 'condition': 'Sunny' });
    })

    it('instructs a plane to take off only in sunny conditions', function() {
      // weather = jasmine.createSpyObj('weather', { 'condition': 'Sunny' });
      airport.land(plane, weather);
      airport.takeOff(plane, weather);
      expect(airport.hangar).not.toContain(plane)
    })
    it('raises error when weather is stormy', function(){
      // weather = jasmine.createSpyObj('weather', { 'condition': 'Sunny' });
      airport.land(plane, weather);
      weather = jasmine.createSpyObj('weather', { 'condition': 'Stormy' });
      expect(function() { airport.takeOff(plane, weather) } ).toThrow('Cannot take off');
    })
  })


})
