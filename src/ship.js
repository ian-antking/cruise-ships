Ship = function(port) {
    this.currentPort = port;
    
};

Ship.prototype.sail = function() {
    this.currentPort = null;
};

Ship.prototype.dock = function(port) {
    this.currentPort = port;
};

module.exports = Ship;