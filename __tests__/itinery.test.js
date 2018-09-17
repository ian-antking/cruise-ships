const Itinerary = require('../src/itinery.js');

let itinerary = null;

beforeEach(() => {
    itinerary = new Itinerary();
});

it('creates a new itinerary object', () => {
    expect(itinerary).toBeInstanceOf(Object);
});

it('has a list of ports', () =>{
    expect(itinerary.ports).toEqual([]);
});