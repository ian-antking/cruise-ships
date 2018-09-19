const Port = function Port(name) {
  this.name = name;
  this.ships = [];
};

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function removeShip(ship) {
  const shipIndex = this.ships.indexOf(ship);
  this.ships.splice(shipIndex, 1);
};

module.exports = Port;
