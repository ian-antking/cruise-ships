const Port = require('../src/port.js');


let newYork = null;
let titanic = null;

beforeEach(() => {
  newYork = new Port('New York');
  titanic = jest.fn();
});

it('Creates a new port', () => {
  expect(newYork).toBeInstanceOf(Object);
});

it('Port has a name', () => {
  expect(newYork.name).toBe('New York');
});
/* globals jest describe it expect */
it('has a ships propery', () => {
  expect(newYork.ships).toEqual([]);
});

it('addShip adds a ship to the port.ships property', () => {
  newYork.addShip(titanic);
  expect(newYork.ships).toContain(titanic);
});

it('removeShip removes ship from the port.ships propery', () => {
  newYork.addShip(titanic);
  newYork.removeShip(titanic);
  expect(newYork.ships).toEqual([]);
});
