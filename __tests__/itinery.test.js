/* globals jest describe it expect */
const Itinerary = require('../src/itinery.js');

let itinerary = null;
const newYork = jest.fn;
const london = jest.fn;
const ports = [newYork, london];

beforeEach(() => {
  itinerary = new Itinerary(ports);
});

it('creates a new itinerary object', () => {
  expect(itinerary).toBeInstanceOf(Object);
});

it('has a list of ports', () => {
  expect(itinerary.ports).toEqual(ports);
});
