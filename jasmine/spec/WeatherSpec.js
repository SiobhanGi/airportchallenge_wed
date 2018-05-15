describe('Weather', function(){
  beforeEach(function(){
     weather = new Weather()
  })

  describe('#condition', function(){
    it('returns stormy when rand(2))', function(){
      spyOn(Math, 'floor').and.returnValue(2);
      expect(weather.condition()).toEqual('Stormy')
    });
  });
});
