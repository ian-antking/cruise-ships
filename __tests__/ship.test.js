const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinery.js');

let ship = null;
let port = null;
let itinerary = null;
let london = null;
let newYork = null;
let shanghai = null;

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
    
    itinerary = new Itinerary([london, newYork, shanghai]);
    ship = new Ship(itinerary);
});

function sailDock(ship, number){
    for(let journey = 0; journey < number; journey += 1){
        ship.sail();
        ship.dock();
    };
};

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
})

it('ship is able to dock at port', () => {
    sailDock(ship, 1);
    expect(ship.currentPort).toBe(newYork);
    sailDock(ship, 1);
    expect(ship.currentPort).toBe(shanghai);
});

it('throws an error if ship tries to sail past it\'s itinerary', () => {
    sailDock(ship, itinerary.ports.length);  
    expect(ship.sail).toThrow(Error('Ship has completed itinerary'));
});

