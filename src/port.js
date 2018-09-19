const Port = function(name){
    this.name = name;
    this.ships = [];  
};

Port.prototype.addShip = function(ship) {
    this.ships.push(ship);
};

module.exports = Port;