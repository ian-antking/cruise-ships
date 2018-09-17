Ship = function(port) {
    this.startingPort = port;
    this.location = port;
};

Ship.prototype.sail = function(destination) {
    this.location = destination;
};

module.exports = Ship;