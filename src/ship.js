Ship = function(port) {
    this.currentPort = port;
    this.previousPort= null;
    
};

Ship.prototype.sail = function() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
};

Ship.prototype.dock = function(port) {
    this.currentPort = port;
};

module.exports = Ship;