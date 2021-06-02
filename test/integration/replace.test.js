'use strict';

const str = require('../../lib/index');

describe('Repalcing', () => {

    test('replace by index', () => {
        expect(str('This is an example!').splice(0, 9, 'I am the new')).toBe('I am the new example!');
    });

});
