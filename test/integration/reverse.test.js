'use strict';

const str = require('../../lib/index');

describe('Reverse', () => {

    test('reverse string', () => {
        expect(str('This is an example!').reverse()).toBe('!elpmaxe na si sihT');
    });

});
