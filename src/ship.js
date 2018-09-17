Ship = function(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = this.itinerary.ports[0];
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