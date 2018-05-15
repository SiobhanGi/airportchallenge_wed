function Weather() {};

Weather.prototype.condition = function() {
  var random = Math.floor(Math.random * 3);

  if (random === 2) {
    return 'Stormy'
  }
  else {
    return 'Sunny'
  }
};
