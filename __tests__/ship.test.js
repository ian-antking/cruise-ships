const Ship = require('../src/ship.js');

let ship = null;

beforeEach(() => {
    ship = new Ship('London');
});

it('Ship is an object with a starting port property', () => {
    expect(ship.startingPort).toBe('London');
});

it('Ship is able to set sail', () => {
    ship.sail();
    expect(ship.startingPort).toBeFalsy();
})