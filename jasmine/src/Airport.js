function Airport() {
  this.hanger = [];
};

Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
}

Airport.prototype.takeOff = function(plane, weather = new Weather()) {
  var i = this.hanger.indexOf(plane)
  if (weather.condition() === 'Sunny') {
    this.hanger.splice(i, 1);
  } else {
    throw 'Cannot take off'
  }
}
