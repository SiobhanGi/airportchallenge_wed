const CAPACITY = 5;
// debugger
function Airport() {
  this.hangar = [];
  this._full = false;
}

Airport.prototype.land = function(plane, weather = new Weather()) {

  if (weather.condition() === 'Sunny') {
    this.hangar.push(plane);
  } else {
    throw 'Cannot land'
  }
}

Airport.prototype.takeOff = function(plane, weather = new Weather()) {
  var i = this.hangar.indexOf(plane)
  if (weather.condition() === 'Sunny') {
    this.hangar.splice(i, 1);
  } else {
    throw 'Cannot take off'
  }
}

Airport.prototype.isFull = function() {
  return this._full;
}
