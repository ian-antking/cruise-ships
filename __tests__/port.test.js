const Port = require('../src/port.js')

let newYork = null;

beforeEach(() => {
    newYork = new Port('New York');
});

it('Creates a new port', () => {
    expect(newYork).toBeInstanceOf(Object);
});

it('Port has a name', () => {
    expect(newYork.name).toBe('New York');
});