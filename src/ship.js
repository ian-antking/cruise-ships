Ship = function(port) {
    this.startingPort = port;
    
};

Ship.prototype.sail = function() {
    this.startingPort = null;
};

Ship.prototype.dock = function(port) {
    this.startingPort = port;
};

module.exports = Ship;