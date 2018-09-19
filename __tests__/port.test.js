const Port = require('../src/port.js');
const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinery.js');

let newYork = null;
let london = null;
let  atlanticCrossing = null;
let titanic = null;

beforeEach(() => {
    newYork = new Port('New York');
    london = new Port('London');
    atlanticCrossing =  new Itinerary();
    atlanticCrossing.ports = [london, newYork];
    titanic = new Ship(atlanticCrossing);
});

it('Creates a new port', () => {
    expect(newYork).toBeInstanceOf(Object);
});

it('Port has a name', () => {
    expect(newYork.name).toBe('New York');
});

it('has a ships propery', () => {
    expect(newYork.ships).toEqual([]);
});

it('addShip adds a ship to the port.ships propery', () => {
    london.addShip(titanic);
    expect(london.ships).toEqual([titanic]);
});

it('removeShip removes ship from the port.ships propery', () => {
    newYork.addShip(titanic);
    london.removeShip(titanic);
    expect(london.ships).toEqual([]);
});