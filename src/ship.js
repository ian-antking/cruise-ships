const Ship = function(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = this.itinerary.ports[0];
    this.tripLength = this.itinerary.ports.length;
    this.previousPort = null;
    this.portIndex = 0;
};

Ship.prototype.sail = function() {
    if(this.portIndex === this.tripLength) {
        throw new Error('Ship has completed itinerary');
    }else{
        this.previousPort = this.currentPort;
        this.currentPort = null;
    };
};

Ship.prototype.dock = function() {
    this.portIndex = this.itinerary.ports.indexOf(this.previousPort) + 1;
    this.currentPort = this.itinerary.ports[this.portIndex];
};

module.exports = Ship;