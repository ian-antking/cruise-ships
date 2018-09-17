const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

let ship = null;
let london = null;
let newYork = null;

beforeEach(() => {
    london = new Port('London');
    newYork = new Port('New York');
    ship = new Ship(london);
});

it('Ship is an object with a starting port property', () => {
    expect(ship.startingPort.name).toBe('London');
});

it('Ship is able to set sail', () => {
    ship.sail();
    expect(ship.startingPort).toBeFalsy();
})

it('ship is able to dock at port', () => {
    ship.dock(newYork);
    expect(ship.startingPort).toBe(newYork);
});