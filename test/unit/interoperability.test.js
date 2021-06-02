'use strict';

const str = require('../../lib/index')('test');

describe('interoperability should be ok', () => {

    test('has interoperability', () => {
        expect(str).toHaveProperty('countOccurencesOf');
        expect(str).toHaveProperty('encryptInOccurencesFormat');
        expect(str).toHaveProperty('removeByIndex');
        expect(str).toHaveProperty('removeWord');
        expect(str).toHaveProperty('removeWordAll');
        expect(str).toHaveProperty('reverse');
        expect(str).toHaveProperty('add');
        expect(str).toHaveProperty('addInHead');
        expect(str).toHaveProperty('addInEnd');
        expect(str).toHaveProperty('upperByIndex');
        expect(str).toHaveProperty('upperWord');
        expect(str).toHaveProperty('upperWordAll');
        expect(str).toHaveProperty('lowerByIndex');
        expect(str).toHaveProperty('lowerWord');
        expect(str).toHaveProperty('lowerWordAll');
        expect(str).toHaveProperty('splice');
    });

});
