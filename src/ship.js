Ship = function(port) {
    this.startingPort = port;
    
};

Ship.prototype.sail = function() {
    this.startingPort = null;
};

module.exports = Ship;