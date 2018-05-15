function Airport() {
  this.hanger = [];
};

Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
}

Airport.prototype.takeOff = function(plane) {
  var i = this.hanger.indexOf(plane)
  this.hanger.splice(i, 1);
}
