'use strict';

const str = require('../../lib/index');

describe('Encrypt', () => {

    test('encrypt string in occurrences format', () => {
        expect(str('This is an example!').encryptInOccurencesFormat()).toBe('1T1h2i2s32a1n2e1x1m1p1l1!');
        expect(str('aabdccczxxxxx').encryptInOccurencesFormat()).toBe('2a1b1d3c1z5x');
    });

});
