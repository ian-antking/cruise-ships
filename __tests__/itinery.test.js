const Itinery = require('../src/itinery.js');

let itinery = null;

beforeEach(() => {
    itinery = new Itinery();
});

it('creates a new itinery object', () => {
    expect(itinery).toBeInstanceOf(Object);
});

it('has a list of ports', () =>{
    expect(itinery.ports).toEqual([]);
});