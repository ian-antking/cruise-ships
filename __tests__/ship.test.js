const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinery.js');

let ship = null;
let london = null;
let newYork = null;
let itinerary = null;
let shanghai = null;

beforeEach(() => {
    london = new Port('London');
    newYork = new Port('New York');
    shanghai = new Port('Shanghai')
    itinerary = new Itinerary();
    itinerary.ports = [london, newYork, shanghai];
    ship = new Ship(itinerary);
});

function sailDock(ship){
    ship.sail();
    ship.dock();
}

it('has an itinerary property', () => {
    expect(ship.itinerary).toEqual(itinerary);
});

it('Ship is an object with a current port property', () => {
    expect(ship.currentPort).toBe(london);
});

it('ship gets added to port.ships on instantiation', () => {
    expect(london.ships).toContain(ship);
});

it('has a previous port property at construction', () => {
    expect(ship.previousPort).toBeFalsy();
});

it('Ship is able to set sail', () => {
    ship.sail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(london);
    expect(ship.previousPort.ships.indexOf(ship)).toBe(-1);
})

it('ship is able to dock at port', () => {
    sailDock(ship);
    expect(ship.currentPort).toBe(newYork);
    sailDock(ship);
    expect(ship.currentPort).toBe(shanghai);
});

it('throws an error if ship tries to sail past it\'s itinerary', () => {
    for(let journey = 0; journey < itinerary.ports.length; journey += 1){
        ship.sail();
        ship.dock();  
    }
    expect(ship.sail).toThrow(Error('Ship has completed itinerary'));
});

