(function exportShip() {
  const Ship = function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = this.itinerary.ports[0];
    this.currentPort.addShip(this);

    this.tripLength = this.itinerary.ports.length;
    this.previousPort = null;
    this.portIndex = 0;
  };

  Ship.prototype.sail = function sail() {
    const weather = Math.random();
    if (weather > 1) {
      throw new Error('The seas are too stormy!');
    } else if (this.portIndex === this.tripLength) {
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

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());
