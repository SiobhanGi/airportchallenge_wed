describe('Airport', function(){
  var aiport;
  beforeEach(function(){
    airport = new Airport()
    plane = jasmine.createSpy('plane');
  })

  describe('#land', function(){
    it('lands a plane', function(){
      airport.land(plane);
      console.log(airport.hanger)
      expect(airport.hanger).toContain(plane)
    })
  })
  describe('#takeOff', function(){
    it('intructs a plane to take off', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hanger).not.toContain(plane)
    })
  })
})
