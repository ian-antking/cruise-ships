const Itinery = require('../src/itinery.js');

let itinery = null;

beforeEach(() => {
    itinery = new Itinery();
});

it('creates a new itinery object', () => {
    expect(itinery).toBeInstanceOf(Object);
});