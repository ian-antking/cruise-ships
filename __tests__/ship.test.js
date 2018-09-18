const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinery.js');

let ship = null;
let london = null;
let newYork = null;
let itinerary = null;

beforeEach(() => {
    london = new Port('London');
    newYork = new Port('New York');
    itinerary = new Itinerary();
    itinerary.ports = [london, newYork];
    ship = new Ship(itinerary);
});

it('has an itinerary property', () => {
    expect(ship.itinerary).toEqual(itinerary);
});

it('Ship is an object with a current port property', () => {
    expect(ship.currentPort).toBe(london);
});

it('has a previous port property at construction', () => {
    expect(ship.previousPort).toBeFalsy();
});

it('Ship is able to set sail', () => {
    ship.sail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(london);
})

it('ship is able to dock at port', () => {
    ship.sail();
    ship.dock();
    expect(ship.currentPort).toBe(newYork);
});

