'use strict';

const str = require('../../lib/index');

describe('LowerCase', () => {

    test('lower by index', () => {
        expect(str('THIS IS AN EXAMPLE!').lowerByIndex(0)).toBe('tHIS IS AN EXAMPLE!');
    });

    test('lower by word', () => {
        expect(str('THIS IS AN EXAMPLE!').lowerWord('IS')).toBe('THis IS AN EXAMPLE!');
    });

    test('lower by word all', () => {
        expect(str('THIS IS AN EXAMPLE!').lowerWordAll('IS')).toBe('THis is AN EXAMPLE!');
    });

});
