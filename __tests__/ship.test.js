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
    expect(ship.currentPort.name).toBe('London');
});

it('Ship is able to set sail', () => {
    ship.sail();
    expect(ship.currentPort).toBeFalsy();
})

it('ship is able to dock at port', () => {
    ship.dock(newYork);
    expect(ship.currentPort).toBe(newYork);
});