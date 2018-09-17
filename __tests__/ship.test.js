const Ship = require('../src/ship.js');

let ship = null;

beforeEach(() => {
    ship = new Ship('London');
});

it('Ship is an object with a starting port property', () => {
    expect(ship.startingPort).toBe('London');
});

it('Ship is able to set sail to a different port.', () => {
    ship.sail('New York');
    expect(ship.location).toBe('New York');
})