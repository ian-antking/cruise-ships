const Itinerary = require('../src/itinery.js');

let itinerary = null;
const ports = [];

beforeEach(() => {
    itinerary = new Itinerary(ports);
});

it('creates a new itinerary object', () => {
    expect(itinerary).toBeInstanceOf(Object);
});

it('has a list of ports', () =>{
    expect(itinerary.ports).toEqual([]);
});