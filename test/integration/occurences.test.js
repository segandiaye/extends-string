'use strict';

const str = require('../../lib/index');

describe('Occurences', () => {

    test('count occurrences of a word', () => {
        expect(str('This is an example!').countOccurencesOf('is')).toBe(2);
    });

});
