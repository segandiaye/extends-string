'use strict';

const str = require('../../lib/index');

describe('Update', () => {

    test('upper by index', () => {
        expect(str('this is an example!').upperByIndex(0)).toBe('This is an example!');
    });

    test('upper by word', () => {
        expect(str('this is an example!').upperWord('is')).toBe('thIS is an example!');
    });

    test('upper by word all', () => {
        expect(str('this is an example!').upperWordAll('is')).toBe('thIS IS an example!');
    });

});
