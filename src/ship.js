const Ship = function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = this.itinerary.ports[0];
  this.currentPort.addShip(this);

  this.tripLength = this.itinerary.ports.length;
  this.previousPort = null;
  this.portIndex = 0;
};

Ship.prototype.sail = function sail() {
  if (this.portIndex === this.tripLength) {
    throw new Error('Ship has completed itinerary');
  } else {
    this.previousPort = this.currentPort;
    this.currentPort = null;
    this.previousPort.removeShip(this);
  }
};

Ship.prototype.dock = function dock() {
  this.portIndex = this.itinerary.ports.indexOf(this.previousPort) + 1;
  this.currentPort = this.itinerary.ports[this.portIndex];
};

module.exports = Ship;
