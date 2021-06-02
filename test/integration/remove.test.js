'use strict';

const str = require('../../lib/index');

describe('Remove', () => {

    test('remove by index', () => {
        expect(str('This is an example!').removeByIndex(2)).toBe('Ths is an example!');
    });

    test('remove by word', () => {
        expect(str('This is one of one an example!').removeWord('one')).toBe('This is  of one an example!');
    });

    test('remove by word all', () => {
        expect(str('This is one of one an example!').removeWordAll('one')).toBe('This is  of  an example!');
    });

});
