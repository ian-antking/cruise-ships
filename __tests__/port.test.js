const Port = require('../src/port.js');
const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinery.js');

let newYork = null;
let london = null;
let manilla = null;
let honolulu = null;
let  atlanticCrossing = null;
let titanic = null;

beforeEach(() => {
    newYork = new Port('New York');
    london = new Port('London');
    manilla = new Port('Manilla');
    honolulu = new Port('Honalulu') 
    atlanticCrossing =  new Itinerary();
    pacificCruise = new Itinerary();
    atlanticCrossing.ports = [london, newYork];
    pacificCruise.ports = [manilla, honolulu];
    titanic = new Ship(atlanticCrossing);
    gigantic = new Ship(pacificCruise);
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

it('addShip adds a ship to the port.ships property', () => {
    manilla.addShip(titanic);
    expect(manilla.ships).toContain(titanic);
});

it('removeShip removes ship from the port.ships propery', () => {
    newYork.addShip(titanic);
    london.removeShip(titanic);
    expect(london.ships).toEqual([]);
});