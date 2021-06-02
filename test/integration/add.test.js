'use strict';

const str = require('../../lib/index');

describe('Add', () => {

    test('add by index', () => {
        expect(str('This is an example!').add(8, 'one of ')).toBe('This is one of an example!');
    });

    test('add in head', () => {
        expect(str('This is an example!').addInHead('Hi! ')).toBe('Hi! This is an example!');
    });

    test('add in end', () => {
        expect(str('This is an example!').addInEnd('!')).toBe('This is an example!!');
    });

});
