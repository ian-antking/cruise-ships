/* globals jest describe it expect */
const Ship = require('../src/ship.js');

let ship = null;
let port = null;
let itinerary = null;
let london = null;
let newYork = null;
let shanghai = null;

describe('Ship object', () => {
  function sailDock(vessel, number) {
    for (let journey = 0; journey < number; journey += 1) {
      vessel.sail();
      vessel.dock();
    }
  }
  beforeEach(() => {
    port = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
    };
    london = {
      ...port,
      name: 'london',
      ships: [],
    };
    newYork = {
      ...port,
      name: 'New York',
      ships: [],
    };
    shanghai = {
      ...port,
      name: 'Shanghai',
      ships: [],
    };

    itinerary = { ports: [london, newYork, shanghai] };
    ship = new Ship(itinerary);
  });
  describe('fair weather', () => {
    beforeAll(() => {
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0.1;
      global.Math = mockMath;
    });

    it('has an itinerary property', () => {
      expect(ship.itinerary).toEqual(itinerary);
    });

    it('Ship is an object with a current port property', () => {
      expect(ship.currentPort).toBe(london);
    });

    it('ship gets added to port.ships on instantiation', () => {
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });

    it('has a previous port property at construction', () => {
      expect(ship.previousPort).toBeFalsy();
    });

    it('Ship is able to set sail', () => {
      ship.sail();
      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(london);
      expect(london.ships.indexOf(ship)).toBe(-1);
    });

    it('throws an error if ship tries to sail past it\'s itinerary', () => {
      sailDock(ship, itinerary.ports.length);
      expect(ship.sail).toThrow(Error('Ship has completed itinerary'));
    });

    it('ship is able to dock at port', () => {
      // weather = 0.3;
      sailDock(ship, 1);
      expect(ship.currentPort).toBe(newYork);
      sailDock(ship, 1);
      expect(ship.currentPort).toBe(shanghai);
    });
  });

  describe('stormy weather', () => {
    beforeAll(() => {
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0.8;
      global.Math = mockMath;
    });
    it('throws an error if the seas are too stormy', () => {
      expect(ship.sail).toThrow(Error('The seas are too stormy!'));
    });
  });
});
