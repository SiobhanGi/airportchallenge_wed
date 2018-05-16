function Airport() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
}

Airport.prototype.takeOff = function(plane, weather = new Weather()) {
  var i = this.hangar.indexOf(plane)
  if (weather.condition() === 'Sunny') {
    this.hangar.splice(i, 1);
  } else {
    throw 'Cannot take off'
  }
}
